// implement function that writes process.stdin data into file using Writable Stream

import { open } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFilePath = path.resolve(__dirname,'files', 'fileToRead.txt');
const outputFilePath = path.resolve(__dirname,'files', 'fileToWrite.txt');

// const write = async () => {
//     try {
//         const fd = await open(inputFilePath);
//         fd.createReadStream().pipe(fs.createWriteStream(outputFilePath));
//     } catch(err) {
//         console.log(err);
//     }
// };

const write = async () => {
    try {
        const fd = await open(inputFilePath);
        fd.createReadStream().pipe(fs.createWriteStream(outputFilePath));
    } catch(err) {
        console.log(err);
    }
};

await write();