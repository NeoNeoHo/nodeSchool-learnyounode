var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-type': 'text/plain'});
	var data = fs.createReadStream(process.argv[3]);
	data.pipe(res);
});
server.listen(process.argv[2]);