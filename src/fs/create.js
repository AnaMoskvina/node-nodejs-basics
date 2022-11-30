// implement function that creates new file fresh.txt 
// with content I am fresh and young  inside of the files folder 
// (if file already exists Error with message FS operation failed must be thrown)

import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

const filePath = path.resolve('files', 'fresh.txt');
const text = 'I am fresh and young';
const errorMessage = 'FS operation failed';


// 1. async
// const create = async () => {   
//     fs.access(filePath, fs.constants.F_OK, err => {
//         if (!err) throw new Error(errorMessage);
//         fs.writeFile(filePath, text, 'utf8', () => { 
//             console.log('created');
//         })
//     })
// };

// 2. promises
// const create = async () => {    
//     try {
//         await fsPromises.access(filePath, fs.constants.F_OK)
//         .then(() => {
//             throw new Error(errorMessage);
//             },
//             () => fsPromises.writeFile(filePath, text, 'utf8'));
//     } catch(e) {
//         console.log(e);
//     }
// };

// 3. better way with flag
const create = async () => {
    try {
        await fsPromises.writeFile(filePath, text, {encoding: 'utf8', flag: 'wx'});
    } catch(e) {
        throw new Error(errorMessage);
    }
};

await create();