// implement function that calculates SHA256 hash 
// for file fileToCalculateHashFor.txt and return it as hex

import fs from 'fs'
import { stdout } from 'process'
const {
    createHash
  } = await import('node:crypto')

const filePath = './files/fileToCalculateHashFor.txt'

// 1. with streams
export const calculateHash = () => {
  const hash = createHash('sha256')
  fs.createReadStream(filePath)
    .pipe(hash)
    .setEncoding('hex')
    .pipe(stdout)
}

calculateHash()

// 2. with update and digest methods
// export const calculateHash1 = () => {
//     const hash = createHash('sha256')
//     fs.readFile(filePath, (err, data) => {
//       if (err) throw err
//       hash.update(data)
//       return hash.digest('hex')
//     })   
// }

// calculateHash1()