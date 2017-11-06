var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/dist'));
app.listen(8080);

//PathLocationStrategy
app.get('/*', function(req, res) {
	res.sendfile(path.join(__dirname + '/dist/index.html'));
})

console.log('Console listening!');
