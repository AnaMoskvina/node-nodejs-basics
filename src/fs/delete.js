// implement function that deletes file fileToRemove.txt 
// (if there's no file fileToRemove.txt 
// Error with message FS operation failed must be thrown)

import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

const filePath = path.resolve('files', 'fileToRemove.txt')
const errorMessage = 'FS operation failed'

// 1. async
// export const remove = () => {
//     fs.rm(filePath, err => {
//         if (err) throw new Error(errorMessage)
//     })
// }

// remove()

// 2. promises
export const remove1 = async () => {
    try {
        await fsPromises.rm(filePath)
    } catch(err) {
        throw new Error(errorMessage)
    }
}

remove1()