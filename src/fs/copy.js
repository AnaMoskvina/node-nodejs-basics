// copy.js - implement function that copies folder files files with all its content 
// into folder files_copy at the same level 
// (if files folder doesn't exists or files_copy has already been created 
// Error with message FS operation failed must be thrown)

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const originalDirPath = path.resolve('files');
const copyDirPath = path.resolve('files_copy');
const errorMessage = 'FS operation failed';

// 1. async
// const copy = async () => {
//     fs.access(originalDirPath, fs.constants.F_OK, err => {
//         if (err) throw new Error(errorMessage);
//         fs.access(copyDirPath, fs.constants.F_OK, err => {
//             if (!err) throw new Error(errorMessage);
//             fs.mkdir(copyDirPath, null, () => {
//                 fs.readdir(originalDirPath, 'utf8', (_err, files) => {
//                     files.forEach(file => {
//                         fs.copyFile(
//                             path.resolve(originalDirPath, file), 
//                             path.resolve(copyDirPath, file), 
//                             0, 
//                             () => {});
//                         });
//                     });
//             });
//         });
//     });
// };

// 2. promises
const copy = async () => {
    try {
        const files = await fsPromises.readdir(originalDirPath, 'utf8');
        await fsPromises.mkdir(copyDirPath);
        files.forEach(file => 
            fsPromises.copyFile(path.resolve(originalDirPath, file), path.resolve(copyDirPath, file), 0));
    } catch (_err) {
        throw new Error(errorMessage);
    }
};

// 3. experimental cp (with promises)
// doesn't work properly: copies, but handling errors doesn't work
// const copy = async () => {
//     try {
//         fsPromises.cp(originalDirPath, copyDirPath, { recursive: true, errorOnExist: true });
//     } catch (_err) {
//         throw new Error(errorMessage);
//     }
// };

await copy();