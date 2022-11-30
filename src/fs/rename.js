// implement function that renames file wrongFilename.txt 
// to properFilename with extension .md 
// (if there's no file wrongFilename.txt or properFilename.md 
// already exists Error with message FS operation failed must be thrown)

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const wrongFilename = path.resolve('files', 'wrongFilename.txt');
const properFilename = path.resolve('files', 'properFilename.md');
const errorMessage = 'FS operation failed';

// 1. async
// const rename = async () => {
//     fs.access(wrongFilename, fs.constants.F_OK, err => {
//         if (err) throw new Error(errorMessage);
//         fs.rename(wrongFilename, properFilename, err => {
//             if (err) throw new Error(errorMessage);
//         })
//     })
// };

// 2. promises
const rename = async () => {
    try {
        await fsPromises.access(wrongFilename, fs.constants.F_OK);
        fsPromises.rename(wrongFilename, properFilename);
    } catch (err) {
        throw new Error(errorMessage);
    }
};

rename();