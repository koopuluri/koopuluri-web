
// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var http = require('http');

app.set('view engine', 'ejs'); // set up ejs for templating

// Set /static as our static content dir
app.use("/", express.static(__dirname + "/static"));

// some routing:
app.get('/', function(req, res, next) {
   res.render('index.ejs', {});
});

app.get('/poop', function(req, res, next) {

	res.render('post.ejs', {
		title: 'Chai Pe Charcha (Discussion Over Chai)', 
		timestamp: '10/21/2015',
		content: '../posts/poop.ejs'
	});
});

app.get('/vernon', function(req, res, next) {

	res.render('post2.ejs', {
		title: 'Vernon Price', 
		timestamp: '10/29/2015',
		content: '../posts/vernon.ejs'
	});
});

// launch ======================================================================
var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);
});








