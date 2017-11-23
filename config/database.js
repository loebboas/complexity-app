const crypto = require('crypto');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/complexity-app-db';
const MONGODB_NAME = process.env.MONGODB_NAME || 'complexity-app-db';
const SECRET_KEY = process.env.SECRET_KEY || crypto.randomBytes(256).toString('hex');

module.exports = {
    uri: MONGODB_URI,
    db: MONGODB_NAME,
    secret: SECRET_KEY,
};
