// cp.js - implement function spawnChildProcess that receives 
// array of arguments args and creates child process from file script.js,
// passing these args to it. This function should create IPC-channel 
// between stdin and stdout of master process and child process:
//   -  child process stdin should receive input from master process stdin
//   -  child process stdout should send data to master process stdout
import { fork } from 'node:child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = fork(filePath, args);
    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

spawnChildProcess(['arg1', 'arg2']);