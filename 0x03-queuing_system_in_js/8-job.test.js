#!/usr/bin/node
/**
*  8-job.test.js
*/
import kue from 'kue';
import { expect } from 'chai';
import createPushNotificationsJobs from './8-job.js'

describe('createPushNotificationsJobs', () => {
    let queue;
    beforeEach(() => {
        queue = kue.createQueue();
        queue.testMode.enter();
    });
    afterEach(() => {
        queue.testMode.clear();
        queue.testMode.exit();
    });
    it('should display an error if jobs is not an array', () => {
        expect(() => createPushNotificationsJobs('not an array', queue)).to.throw('Jobs is not an array');
    });
    it('should create two new jobs in the queue', () => {
        const jobs = [
            {
                phoneNumber: '415323232',
                message: 'This is the code 1234 to verify your account'
            },
            {
                phoneNumber: '234234342',
                message: 'This is the code to verify',
            }
        ];
        createPushNotificationsJobs(job, queue);
        expect(queue.testMode.jobs.length).to.equal(2);
        expect(queue.testMode.job[0].type).to.equal('push_notification_code_3');
        expect(queue.testMode.job[1].type).to.equal('push_notification_code_3');
    })

});