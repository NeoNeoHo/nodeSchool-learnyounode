var fs = require('fs');

fs.readFile(process.argv[2], function(err, buf){
	if(!err){
		var strArray = buf.toString().split('\n');
		console.log(strArray.length -1);
	}
});