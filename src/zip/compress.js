// implement function that compresses file fileToCompress.txt 
// to archive.gz using zlib and Streams API

import { createGzip } from 'zlib';
// import { pipeline } from 'stream';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToSource = path.resolve(__dirname,'files', 'fileToCompress.txt');
const pathToDestination = path.resolve(__dirname, 'files', 'archive.gz');

// 1. async
// const compress = () => {
//     const gzip = createGzip();
//     const source = createReadStream(pathToSource);
//     const destination = createWriteStream(pathToDestination);

//     pipeline(source, gzip, destination, err => {
//         if (err) process.exitCode = 1;
//     });
// };

// 2. promisees - with promisify - old
// const compress = async () => {
//     try {
//         const gzip = createGzip();
//         const pipe = promisify(pipeline);
//         const source = createReadStream(pathToSource);
//         const destination = createWriteStream(pathToDestination);
//         await pipe(source, gzip, destination);
//     } catch (err) {
//         process.exitCode = 1;
//     }
// };

// 3. promises
const compress = async () => {
    try {
        const gzip = createGzip();
        const source = createReadStream(pathToSource);
        const destination = createWriteStream(pathToDestination);
        await pipeline(source, gzip, destination);
    } catch (err) {
        process.exitCode = 1;
    }
};

await compress();