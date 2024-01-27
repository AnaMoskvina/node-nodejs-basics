// implement function that reads data from process.stdin, 
// reverses text using Transform Stream 
// and then writes it into process.stdout

import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const transform = (chunk, _encoding, callback) => {
        const string = chunk.toString();
        // handling line break
        const firstSymbol = string.slice(-1);
        const restSymbols = string.slice(0, -1);
        transformStream.push(restSymbols.split('').reverse().join('') + firstSymbol);
        callback();
    };

    const transformStream = new Transform({transform});
    stdin.pipe(transformStream).pipe(stdout);
};

await transform();
