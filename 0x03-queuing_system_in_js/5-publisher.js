#!/usr/bin/node
/**
 *  Node Redis Client
 */

const redis = require('redis');

// Create a Redis client
const client = redis.createClient();

// Log success message when connected
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Log error message on connection failure
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

function publishMessage(message, time) {
    setTimeout(() => {
        console.log(`About to send ${message}`);
        client.publish('holberton school channel', message);
    }, time);
}
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
