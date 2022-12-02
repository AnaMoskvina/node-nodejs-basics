// implement function that reads data from process.stdin, 
// reverses text using Transform Stream 
// and then writes it into process.stdout

import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform();
    transformStream._transform = (chunk, _encoding, callback) => {
        const string = chunk.toString();
        // handling line break
        const firstSymbol = string[string.length - 1];
        const restSymbols = string.slice(0, -1);
        transformStream.push(restSymbols.split('').reverse().join('') + firstSymbol);
        callback();
    }
    stdin.pipe(transformStream).pipe(stdout);
};

transform();