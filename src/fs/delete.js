// implement function that deletes file fileToRemove.txt 
// (if there's no file fileToRemove.txt 
// Error with message FS operation failed must be thrown)

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const filePath = path.resolve('files', 'fileToRemove.txt');
const errorMessage = 'FS operation failed';

// 1. async
// const remove = async () => {
//     fs.rm(filePath, err => {
//         if (err) throw new Error(errorMessage);
//     })
// };

// 2. promises
const remove = async () => {
    try {
        await fsPromises.rm(filePath);
    } catch(err) {
        throw new Error(errorMessage);
    }
};

await remove();