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

client.subscribe('holberton school channel');

client.on('message', (channel, message) => {
    console.log(message);
    if (message === 'KILL_SERVER') {
        client.unsubscribe();
        client.quit();
    }
});