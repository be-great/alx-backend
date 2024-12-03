import { createClient } from 'redis';

// Create a Redis client
const client = createClient();

// log success message when connected
client.on('conntect', () => {

    console.log('Redis client conntected to the server');
});

// log error message on connection failure
client.on('error', (err) => {

    console.log(`Redis client not connected to the server: ${err.message}`);
});
client.connect();
