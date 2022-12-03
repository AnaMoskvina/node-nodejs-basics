// implement function that calculates SHA256 hash 
// for file fileToCalculateHashFor.txt and return it as hex

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';
const {
    createHash
  } = await import('node:crypto');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

// 1. with streams
const calculateHash = async () => {
  const hash = createHash('sha256');
  fs.createReadStream(filePath)
    .pipe(hash)
    .setEncoding('hex')
    .pipe(stdout);
};

// 2. with update and digest methods
// export const calculateHash = async () => {
//     const hash = createHash('sha256');
//     fs.readFile(filePath, (err, data) => {
//       if (err) throw err;
//       hash.update(data);
//       console.log(hash.digest('hex'));
//     });
// };

await calculateHash();