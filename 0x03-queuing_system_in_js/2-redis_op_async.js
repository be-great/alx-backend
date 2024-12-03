#!/usr/bin/node
/**
 *   Node Redis client and
 *      basic operations
 */
const redis = require('redis');
const { promisify } = require('util');

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

// promisify the client.get method
const getAsync = promisify(client.get).bind(client);

/**
 * set key value in redis
 * schoolName: the key
 * value: the value
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

/**
 * Display the value of the key in Redis
 * schoolName: the key
 */
async function displaySchoolValue(schoolName) {
  try {
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (err) {
    console.error(`Error getting value for key ${schoolName}: ${err.message}`);
  }
}

(async () => {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
})();
