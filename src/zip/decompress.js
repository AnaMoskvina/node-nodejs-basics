// implement function that decompresses archive.gz 
// back to the fileToCompress.txt with same content 
// as before compression using zlib and Streams API

import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';

const pathToArchive = './files/archive.gz';
const pathToDestination = './files/fileToCompress.txt';

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