// implement function that compresses file fileToCompress.txt 
// to archive.gz using zlib and Streams API

import { createGzip } from 'zlib'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'
import { promisify } from 'util'

const pathToSource = './files/fileToCompress.txt'
const pathToDestination = './files/archive.gz'

// 1. async
// export const compress = () => {
//     const gzip = createGzip()
//     const source = createReadStream(pathToSource)
//     const destination = createWriteStream(pathToDestination)

//     pipeline(source, gzip, destination, err => {
//         if (err) process.exitCode = 1
//     })
// }

// compress()

// 2. promisees
export const compress1 = async () => {
    try {
        const gzip = createGzip()
        const pipe = promisify(pipeline)
        const source = createReadStream(pathToSource)
        const destination = createWriteStream(pathToDestination)
        await pipe(source, gzip, destination)
    } catch (err) {
        process.exitCode = 1
    }
}

compress1()