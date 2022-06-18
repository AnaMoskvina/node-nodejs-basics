// copy.js - implement function that copies folder files files with all its content 
// into folder files_copy at the same level 
// (if files folder doesn't exists or files_copy has already been created 
// Error with message FS operation failed must be thrown)

import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

const originalDirPath = path.resolve('files')
const copyDirPath = path.resolve('files_copy')
const errorMessage = 'FS operation failed'

// 1. async
export const copy = () => {
    fs.access(originalDirPath, fs.constants.F_OK, err => {
        if (err) throw new Error(errorMessage)
        fs.access(copyDirPath, fs.constants.F_OK, err => {
            if (!err) throw new Error(errorMessage)
                fs.mkdir(copyDirPath, null, () => {
                    fs.readdir(originalDirPath, 'utf8', (_err, files) => {
                        files.forEach(file => {
                            fs.copyFile(
                                path.resolve(originalDirPath, file), 
                                path.resolve(copyDirPath, file), 
                                0, 
                                () => {})
                        })
                    })
                })
        })
    })
}

copy()