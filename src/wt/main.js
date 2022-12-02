import { Worker } from 'worker_threads';
import os from 'os';

const TREAD_COUNT = os.cpus().length;
const INIT_NUMBER = 10;

const createWorker = (num) => {
    return new Promise((res, rej) => {
        const worker = new Worker('./worker.js');
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
    const results = await Promise.all(workerPromises);
    console.log(results);
};

await performCalculations();