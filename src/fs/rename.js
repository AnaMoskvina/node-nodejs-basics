// implement function that renames file wrongFilename.txt 
// to properFilename with extension .md 
// (if there's no file wrongFilename.txt or properFilename.md 
// already exists Error with message FS operation failed must be thrown)

import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

const dirPath = path.resolve('files')

const wrongFilename = `${dirPath}/wrongFilename.txt`
const properFilename = `${dirPath}/properFilename.md`
const errorMessage = 'FS operation failed'


// 1. async
// export const rename = () => {
//     fs.access(wrongFilename, fs.constants.F_OK, err => {
//         if (err) throw new Error(errorMessage)
//         fs.rename(wrongFilename, properFilename, err => {
//             if (err) throw new Error(errorMessage)
//         })
//     })
// }

// rename()

// 2. promises
// export const rename1 = async () => {
//     try {
//         await fsPromises.access(wrongFilename, fs.constants.F_OK)
//         fsPromises.rename(wrongFilename, properFilename)
//     } catch (err) {
//         throw new Error(errorMessage)
//     }
// }

// rename1()