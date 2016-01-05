
// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var http = require('http');

var POSTS = require('./post-index');
var PICTURES = require('./picture-index');

app.set('view engine', 'ejs'); // set up ejs for templating

// Set /static as our static content dir
app.use("/", express.static(__dirname + "/static"));

// some routing:
app.get('/', function(req, res, next) {
   res.render('index.ejs', {
   		posts: POSTS
   });
});

// =============== MAIN PAGE LINKS ================

app.get('/posts', function(req, res, next) {
	res.render('posts.ejs', {
		posts: POSTS
	});
});

app.get('/photography', function(req, res, next) {
	res.render('photography.ejs', {
		pictures: PICTURES
	});
});

app.get('/resume', function(req, res, next) {
	res.render('resume.ejs', {});
});

// ================================================

// UNLISTED STUFF:
app.get('/vernon', function(req, res, next) {

	res.render('post2.ejs', {
		title: 'Vernon Price', 
		timestamp: '10/29/2015',
		content: '../posts/vernon.ejs'
	});
});

// Meet@Tech Proposal:

// launch ======================================================================
var server = http.createServer(app).listen(port, function() {
    console.log('Express server listening on port ' + port);

	for (var url in POSTS) {
		app.get(url, function(req, res, next) {
			var url = req.route.path;
			var postFilepath = '../posts/' + url.slice(1) + '.ejs';
			res.render(postFilepath, {
				title: POSTS[url]['title'],
				timestamp: POSTS[url]['timestamp']
			});
		});
	}
});








