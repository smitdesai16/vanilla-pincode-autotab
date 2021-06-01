const fs = require('fs-extra')
const sass = require('node-sass');
var uglifyJS = require("uglify-js");

//dist\css\vanilla-pincode-autotab.min.css
sass.render({
	file: 'src/sass/vanilla-pincode-autotab.scss',
	outputStyle: 'compressed'
}, function(error, result) {
	if (error) {
		console.log(error);
	} else {
		fs.outputFile('dist/css/vanilla-pincode-autotab.min.css', result.css.toString());
	}
});

//dist\css\vanilla-pincode-autotab.css
sass.render({
	file: 'src/sass/vanilla-pincode-autotab.scss'
}, function(error, result) {
	if (error) {
		console.log(error);
	} else {
		fs.outputFile('dist/css/vanilla-pincode-autotab.css', result.css.toString());
	}
});

//dist\js\vanilla-pincode-autotab.min.js
fs.readFile('src/js/vanilla-pincode-autotab.js', function(error, data) {
	if (error) {
		console.log(error);
	}
	var result = uglifyJS.minify(data.toString())
	fs.outputFile('dist/js/vanilla-pincode-autotab.min.js', result.code, function(error) {
		if (error) {
			console.log(error);
		}
	})
})

//dist\js\vanilla-pincode-autotab.js
fs.copy('src/js/vanilla-pincode-autotab.js', 'dist/js/vanilla-pincode-autotab.js')
	.then()
	.catch( error => console.log(error));