var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Hello, this is dog");
	response.end();
}).listen(8080);

console.log('Node app is running on port', app.get('port'));
