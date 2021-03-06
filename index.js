const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const api = require('./routes/api')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
const options = { useMongoClient: true }

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, options, (err) => {
	if (err) {
		console.log('Could Not connect to database: ', err);
	} else {
		console.log('Connected to database: ' + config.db);
	}
});

app.use(cors({
	origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/authentication', authentication);
app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});