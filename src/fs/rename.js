// implement function that renames file wrongFilename.txt 
// to properFilename with extension .md 
// (if there's no file wrongFilename.txt or properFilename.md 
// already exists Error with message FS operation failed must be thrown)

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wrongFilename = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const properFilename = path.resolve(__dirname, 'files', 'properFilename.md');
const errorMessage = 'FS operation failed';

// 1. async
const rename = async () => {
    fs.access(wrongFilename, fs.constants.F_OK, err => {
        if (err) throw new Error(errorMessage);
        fs.access(properFilename, fs.constants.F_OK, err => {
            if (!err) throw new Error(errorMessage);
            fs.rename(wrongFilename, properFilename, err => {
                if (err) throw new Error(errorMessage);
            })
        })
    })
};

// 2. promises
// const rename = async () => {
//     try {
//         await fsPromises.access(wrongFilename, fs.constants.F_OK);
//         // this check is not elegant, better with fs
//         const ifProperFileExists = await fsPromises
//             .access(properFilename, fs.constants.F_OK)
//             .then(() => true)
//             .catch(() => false);
//         if (ifProperFileExists) {
//             throw new Error();
//         }
//         fsPromises.rename(wrongFilename, properFilename);
//     } catch (err) {
//         throw new Error(errorMessage);
//     }
// };

rename();