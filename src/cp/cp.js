// cp.js - implement function spawnChildProcess that receives 
// array of arguments args and creates child process from file script.js,
// passing these args to it. This function should create IPC-channel 
// between stdin and stdout of master process and child process:
//   -  child process stdin should receive input from master process stdin
//   -  child process stdout should send data to master process stdout
import { fork } from 'node:child_process'

export const spawnChildProcess = async (args) => {
    const child = fork('./files/script', args);
    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

spawnChildProcess([0, 1])