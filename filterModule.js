var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports = function filterModule (dir_name, ext_filter, callback) {
	fs.readdir(dir_name, function(err, list){
		if (err){
			return callback(err);
		}
		else{
			var extName = '.' + ext_filter;
			var result = [];
			_.forEach(list, function(item){
				if (extName.localeCompare(path.extname(item)) == 0){
					result.push(item);
				}
			});
			callback(null, result);
		}
	});	
}
