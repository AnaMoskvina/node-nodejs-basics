// implement function that prints all array of filenames from files folder into console 
// (if files folder doesn't exists Error with message FS operation failed must be thrown)

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const errorMessage = 'FS operation failed';
const dirPath = path.resolve('files');

// 1. async
// const list = async () => {
//     fs.readdir(dirPath, 'utf8', (err, files) => {
//         if (err) throw new Error(errorMessage);
//         console.log(files);
//     })
// };

// 2. promises
const list = async () => {
    try {
        console.log(await fsPromises.readdir(dirPath, 'utf8'));
    } catch (_err) {
        throw new Error(errorMessage);
    }
}

await list();