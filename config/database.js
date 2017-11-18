const crypto = require('crypto').randomBytes(256).toString('hex');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/complexity-app-db';
const MONGODB_NAME = process.env.MONGODB_NAME || 'complexity-app-db';

module.exports = {
    uri: MONGODB_URI,
    secret: crypto,
    db: MONGODB_NAME,
};
