var http = require('http');
var _ = require('lodash');
var bl = require('bl');
var url_list = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];
var counting = 0;

_.forEach(url_list, function(url) {
	http.get(url, function(res) {
		res.pipe(bl(function(err, data) {
			if (err) console.error(err);
			results[url] = data.toString();
			counting ++;
			if (counting === 3) {
				_.forEach(url_list, function(url) {
					console.log(results[url]);
				});
			}
		}));
	});
});