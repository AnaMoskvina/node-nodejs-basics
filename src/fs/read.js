// implement function that prints content 
// of the fileToRead.txt into console (if there's no file fileToRead.txt 
// Error with message FS operation failed must be thrown)

import fs, { read } from 'fs'
import fsPromises from 'fs/promises'

const errorMessage = 'FS operation failed'
const filePath = './files/fileToRead.txt'

// 1. async
// export const read = () => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) throw new Error(errorMessage)
//         console.log(data)
//     })
// }

// read()

// 2. promises
export const read2 = async () => {
    try {
        console.log(await fsPromises.readFile(filePath, 'utf8'))
    } catch (_err) {
        throw new Error(errorMessage)
    }
}

read2()