const crypto = require('crypto');

// Generate a random string of 64 bytes and encode it to base64
const secretKey = crypto.randomBytes(64).toString('hex');
console.log('Generated JWT Secret:');
console.log(secretKey);
console.log('\nYou can add this to your .env file as:');
console.log(`JWT_SECRET=${secretKey}`);