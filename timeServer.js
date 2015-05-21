var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

var server = net.createServer(function(socket) {
	var date = new Date()
	socket.write(strftime('%F %R', date) + '\n');
	socket.end();
});

server.listen(port);