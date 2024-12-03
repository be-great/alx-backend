#!/usr/bin/node
/**
 * Node Redis Client for advanced operations
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

// Adding key-value pairs to the hash
const hashKey = 'HolbertonSchools';
client.hset(hashKey, 'Portland', 50, redis.print);
client.hset(hashKey, 'Seattle', 80, redis.print);
client.hset(hashKey, 'New York', 20, redis.print);
client.hset(hashKey, 'Bogota', 20, redis.print);
client.hset(hashKey, 'Cali', 40, redis.print);
client.hset(hashKey, 'Paris', 2, redis.print);

// Retrieve and display the hash
client.hgetall(hashKey, (err, obj) => {
    if (err) {
        console.error(`Error retrieving hash: ${err.message}`);
    } else {
        console.log(obj);
    }
});
