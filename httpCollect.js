var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(res) {
	/**
	**/
	// res.pipe(bl(function(err, data) {
	// 	if (err){
	// 		console.error(err);
	// 	}
	// 	var str = data.toString();
	// 	console.log(str.length);
	// 	console.log(str);
	// }));
	var result = '';
	res.setEncoding('utf8');
	res.on('data', function(data) {
		result = result + data.toString();
	});
	res.on('end', function() {
		console.log(result.length);
		console.log(result);
	});
});