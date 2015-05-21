var http = require('http');
var url = require('url');

var parsetime = function parsetime(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
};

var unixtime = function unixtime(time) {
	return {
		unixtime: time.getTime()
	};
};

var server = http.createServer(function(req, res) {
	if (req.method !== 'GET') {
		return res.end('Send me a GET\n');
	}
	var reqUrl = url.parse(req.url, true);
	var time = new Date(reqUrl.query.iso);
	var result = {};

	if (reqUrl.pathname.localeCompare('/api/parsetime') == 0) {	
		result = parsetime(time);
	}
	else if (reqUrl.pathname.localeCompare('/api/unixtime') == 0) {
		result = unixtime(time);
	}
	if (result){
		var resultjson = JSON.stringify(result);
		res.writeHead(200, { 'Content-type': 'application/json' });
		res.end(resultjson);
	}
	else {
		res.writeHead(404);
		res.end();
	}

});
server.listen(process.argv[2]);