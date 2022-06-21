// implement function that reads file fileToRead.txt 
// content using Readable Stream and prints it's content 
// into process.stdout

import { open } from 'fs/promises'
import { stdout } from 'process'

const filePath = './files/fileToRead.txt'

export const read = async () => {
    try {
        const fd = await open(filePath)
        fd.createReadStream().pipe(stdout)
    } catch(err) {
        console.log(err)
    }
}

read()