// implement function that writes process.stdin data into file

import { open } from 'fs/promises'
import fs from 'fs'

const inputFilePath = './files/fileToRead.txt'
const outputFilePath = './files/fileToWrite.txt'

export const read = async () => {
    try {
        const fd = await open(inputFilePath)
        fd.createReadStream().pipe(fs.createWriteStream(outputFilePath))
    } catch(err) {
        console.log(err)
    }
}

read()