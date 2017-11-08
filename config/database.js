<<<<<<< HEAD
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
	uri: 'mongodb://localhost/27017/complexity-app-db',
	secret: crypto,
	db: 'complexity-app-db'
}
=======
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: process.env.databaseUri, // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: process.env.databaseName // Database name
}
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2
