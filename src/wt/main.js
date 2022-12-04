import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TREAD_COUNT = os.cpus().length;
const INIT_NUMBER = 10;

const createWorker = (num) => {
    return new Promise((res, _rej) => {
        const worker = new Worker(path.resolve(__dirname,'./worker.js'));
        worker.postMessage(num);
        worker.on('message', data => res({status: 'resolved', data}));
        worker.on('error', () => res({status: 'error', data: null}));
    });
};

const performCalculations = async () => {
    const workerPromises = [];
    for (let i = 0; i < TREAD_COUNT; i++) {
        workerPromises.push(createWorker(INIT_NUMBER + i));
    }
    const results = await Promise.allSettled(workerPromises);
    console.log(results.map(promise => promise.status === 'fulfilled' 
        ? promise.value 
        : promise.reason)
    );
};

await performCalculations();