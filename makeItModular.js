var filter = require('./filterModule.js');
var _ = require('lodash');

filter(process.argv[2], process.argv[3], function(err, datas){
	_.forEach(datas, function(data){
		console.log(data);
	});
});