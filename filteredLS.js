var fs = require('fs');
var path = require('path');
var _ = require('lodash');

fs.readdir(process.argv[2], function(err, list){
	var extName = '.' + process.argv[3];
	_.forEach(list, function(item){
		if (extName.localeCompare(path.extname(item)) == 0){
			console.log(item);
		}
	});
});