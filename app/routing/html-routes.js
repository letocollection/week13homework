var path = require('path');

module.exports = function (app) {

	// HTML GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/index', function (req, res) {
		console.log('hello index');
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/survey', function (req, res) {
		console.log('hello survey');
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home
	app.use(function (req, res) {
		console.log("hello from home");
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	
};