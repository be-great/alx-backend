#!/usr/bin/node
/**
*  7-job_creator.js
*/
import kue from 'kue';

const queue = kue.createQueue();

const jobs = [
    {phoneNumber: '4153518780', message: 'This is the code 1234 to verify your account'},
    {phoneNumber: '4153518781', message: 'This is the code 4562 to verify your account'},
    {phoneNumber: '4153518743', message: 'This is the code 4321 to verify your account'},
];

jobs.forEach((jobData) => {
    const job = queue.create()
    if (!error) {
        console.log(`Notification job created: ${job.id}`);
    }
});

job.on('complete', () => {
    console.log(`Notification job ${job.id} completed`);
});

job.on('failed', (error) => {
    console.log(`Notification job ${job.id} failed: ${error.message}`);
});
job.on('progress', (progress) => {
    console.log(`Notification job ${job.id} ${progress}% complete`);
})