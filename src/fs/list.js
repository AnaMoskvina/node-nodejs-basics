// implement function that prints all array of filenames from files folder into console 
// (if files folder doesn't exists Error with message FS operation failed must be thrown)

import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

const errorMessage = 'FS operation failed'
const dirPath = path.resolve('files')

// 1. async
// export const list = () => {
//     fs.readdir(dirPath, 'utf8', (err, files) => {
//         if (err) throw new Error(errorMessage)
//         console.log(files)
//     })
// }

// list()

// 2. promises
export const list1 = async () => {
    try {
        console.log(await fsPromises.readdir(dirPath, 'utf8'))
    } catch (_err) {
        throw new Error(errorMessage)
    }
}

list1()