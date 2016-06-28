
// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var http = require('http');

var Mixpanel = require('mixpanel').init("04f0999a4b69c79092856cd192fd5a14")

var POSTS = require('./post-index');
var DESIGN_POSTS = require('./designs-index');
var PICTURES = require('./picture-index');

var DEBUG = true;

var log = function(key) {
	if (DEBUG) {
		// don't log
	} else {
		Mixpanel.track(key)
	}
}

app.set('view engine', 'ejs'); // set up ejs for templating

// Set /static as our static content dir
app.use("/", express.static(__dirname + "/static"));

// some routing:
app.get('/', function(req, res, next) {
	Mixpanel.track("landing")
	res.render('index.ejs', {
		posts: POSTS,
		designPosts: DESIGN_POSTS
	});
});

// =============== MAIN PAGE LINKS ================

app.get('/posts', function(req, res, next) {
	res.render('posts.ejs', {
		posts: POSTS
	});
});

app.get('/chai-pitch', function(req, res, next) {
	res.render('chai-pitch.ejs', {});
});

app.get('/projects', function(req, res, next) {
	res.render('projects.ejs', {});
});

app.get('/chaiapp', function(req, res, next) {
	res.render('chai-pitch.ejs', {});
});


app.get('/design-thoughts', function(req, res, next) {
	res.render('design-thoughts.ejs', {
		designPosts: DESIGN_POSTS
	});
});

app.get('/photography', function(req, res, next) {
	Mixpanel.track("photography");
	res.render('photography.ejs', {
		pictures: PICTURES
	});
});

app.get('/resume', function(req, res, next) {
	res.render('resume.ejs', {});
});

app.get('/meet', function(req, res, next) {
	Mixpanel.track("meet")
	res.render('../posts/meets.ejs', {})
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

    if (port == 8080) {
    	DEBUG = true
    } else {
    	DEBUG = false
    }

	for (var url in POSTS) {
		app.get(url, function(req, res, next) {
			var url = req.route.path;
			var postFilepath = '../posts/' + url.slice(1) + '.ejs';
			Mixpanel.track(POSTS[url]['title'])
			res.render(postFilepath, {
				title: POSTS[url]['title'],
				timestamp: POSTS[url]['timestamp']
			});
		});
	}
});
