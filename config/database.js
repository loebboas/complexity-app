const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
	uri: 'mongodb://localhost:27017/complexity-app-db',
	secret: crypto,
	db: 'complexity-app-db'
}