var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 8080; 

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(path.join(__dirname, 'data')));

require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

