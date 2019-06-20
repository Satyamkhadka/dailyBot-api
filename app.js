//packages import
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = process.env.PORT	|| 3000;

app.use(bodyParser.urlencoded({
	extended: true
}));

app.listen(port, function() {
	console.log("Running on port " + port);
});

var mainRoutes = require('./routes.js');

app.use(mainRoutes);