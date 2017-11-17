const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
	uri: 'mongodb://heroku_j3t92rds:kso2irjuogufavo5b29c3toga4@ds249565.mlab.com:49565/heroku_j3t92rds',
	secret: crypto,
	db: 'heroku_j3t92rds'
}