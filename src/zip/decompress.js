// implement function that decompresses archive.gz 
// back to the fileToCompress.txt with same content 
// as before compression using zlib and Streams API

import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToArchive = path.resolve(__dirname,'files', 'archive.gz');
const pathToDestination = path.resolve(__dirname, 'files', 'fileToCompress.txt');

// 1. async
// const decompress = () => {
//     const unzip = createUnzip();
//     const source = createReadStream(pathToArchive);
//     const destination = createWriteStream(pathToDestination);

//     pipeline(source, unzip, destination, err => {
//         if (err) process.exitCode = 1;
//     })
// }

// decompress()

// 2. promises
const decompress = async () => {
    try {
        const unzip = createUnzip();
        const pipe = promisify(pipeline);
        const source = createReadStream(pathToArchive);
        const destination = createWriteStream(pathToDestination);
        await pipe(source, unzip, destination);
    } catch(err) {
        process.exitCode = 1;
    }
}

decompress();