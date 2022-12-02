// implement function that writes process.stdin data into file using Writable Stream

import { open } from 'fs/promises';
import fs from 'fs';

const inputFilePath = './files/fileToRead.txt';
const outputFilePath = './files/fileToWrite.txt';

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