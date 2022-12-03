// implement function that reads file fileToRead.txt 
// content using Readable Stream and prints it's content 
// into process.stdout

import fs from 'fs';
import { open } from 'fs/promises';
import { stdout } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

// 1. with filehandle
const read = async () => {
    try {
        const fd = await open(filePath);
        fd.createReadStream().pipe(stdout);
    } catch(err) {
        console.log(err);
    }
};

// 2.
// const read = async () => {
//     try {
//         fs.createReadStream(filePath).pipe(stdout);
//     } catch(err) {
//         console.log(err);
//     }
// };

await read();