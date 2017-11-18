const crypto = require('crypto').randomBytes(256).toString('hex');

const DB_URI = process.env.DATABASE_URI || 'mongodb://localhost:27017/complexity-app-db';
const DB_NAME = process.env.DB_NAME || 'complexity-app-db';

module.exports = {
    uri: DB_URI,
    secret: crypto,
    db: DB_NAME,
};
