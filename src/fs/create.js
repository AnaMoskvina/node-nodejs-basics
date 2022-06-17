import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

const filePath = path.resolve('files', 'fresh.txt')
const text = 'I am fresh and young'


// 1. async
// export const create = async () => {
//     // Write your code here     
//     try {
//         fs.access(filePath, fs.constants.F_OK, err => {
//           if (!err) throw new Error('FS operation failed')
//           fs.writeFile(filePath, text, 'utf8', () => { 
//             console.log('created')
//           })
//         })
//     } catch(e) {
//         console.log(e)
//     }
// }

// create()


// 2. promises
export const create1 = async () => {    
    try {
        await fsPromises.access(filePath, fs.constants.F_OK)
        .then(() => {
            throw new Error('FS operation failed')
            },
            () => fsPromises.writeFile(filePath, text, 'utf8'))
    } catch(e) {
        console.log(e)
    }
}

create1()