window.React = require('react');

var AboutMe = require('../components/AboutMe.react');
var FeedContainer = require('../components/FeedContainer.react');
var Contact = require('../components/Contact.react');


React.render(
	<AboutMe />,
	document.getElementById('about-container')
);

React.render(
	<FeedContainer />,
	document.getElementById('feed-container')
);

React.render(
	<Contact />,
	document.getElementById('contact')
);

