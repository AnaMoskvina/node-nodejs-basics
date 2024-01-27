// implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) 
// from file worker.js and able to send data to those threads and to receive result of the computation from them. 
// You should send incremental number starting from 10 to each worker. 
// For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 
// 11 to second worker, 12 to third worker, 13 to fourth worker. 
// After all workers will finish, function should log array of results into console. 
// The results are array of objects with 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker

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