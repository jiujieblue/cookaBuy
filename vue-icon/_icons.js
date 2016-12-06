var fs = require('fs');

fs.readFile('./icomoon/style.css', 'utf-8', function(err, content) {
	if (err) {
		throw err;
	}

	content = content.replace(/fonts/g, '../fonts');

	fs.writeFile('D:/cooka/cooka_pc_web/src/assets/css/icons.css', content, function(err) {
		if (err) {
			throw err;
		}
		console.log('done');
	});

	fs.createReadStream('./icomoon/fonts/icomoon.eot').pipe(fs.createWriteStream('D:/cooka/cooka_pc_web/src/assets/fonts/icomoon.eot'));
	fs.createReadStream('./icomoon/fonts/icomoon.svg').pipe(fs.createWriteStream('D:/cooka/cooka_pc_web/src/assets/fonts/icomoon.svg'));
	fs.createReadStream('./icomoon/fonts/icomoon.ttf').pipe(fs.createWriteStream('D:/cooka/cooka_pc_web/src/assets/fonts/icomoon.ttf'));
	fs.createReadStream('./icomoon/fonts/icomoon.woff').pipe(fs.createWriteStream('D:/cooka/cooka_pc_web/src/assets/fonts/icomoon.woff'));
})

