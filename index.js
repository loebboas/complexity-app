//Import Node Modules
const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');

//Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
	if (err) {
		console.log('could NOT connect to databases: ', err);
	} else {
		console.log('Connected to database: ' + config.db);
	}
});


// Middleware

app.use(cors({
	origin: 'http://localhost:4200'
}));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
//Provide static directory for frontend 
app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication', authentication);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
	console.log('Listening on Port 8080');
})
/* ===================
   Import Node Modules
=================== */
const env = require('./env');
const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
const router = express.Router(); // Creates a new router object.
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise;
const config = require('./config/database'); // Mongoose Config
const path = require('path'); // NodeJS Package for file paths
const authentication = require('./routes/authentication')(router); // Import Authentication Routes
const blogs = require('./routes/blogs')(router); // Import Blog Routes
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const cors = require('cors'); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const port = process.env.PORT || 8080; // Allows heroku to set port
// Database Connection
mongoose.connect(config.uri, {
  useMongoClient: true,
}, (err) => {
  // Check if database was able to connect
  if (err) {
    console.log('Could NOT connect to database: ', err); // Return error message
  } else {
    console.log('Connected to ' + config.db); // Return success message
  }
});

// Middleware
app.use(cors({ origin: 'http://localhost:4200' })); // Allows cross origin in development only
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/public')); // Provide static directory for frontend
app.use('/authentication', authentication); // Use Authentication routes in application
app.use('/blogs', blogs); // Use Blog routes in application

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start Server: Listen on port 8080
app.listen(port, () => {
  console.log('Listening on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');
});
>>>>>>> 4b9ac8810f505e5804a1f7def4e486b3cc3d62f2
