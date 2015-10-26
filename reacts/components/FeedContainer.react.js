var React = require('react')
var FeedPost = require('./FeedPost.react');

var Feed = React.createClass({

	render: function() {
		var style = {
			width: '80%',
			margin: 'auto',
			paddingBottom: 50,
			borderBottom: 'thin solid #C8C8C8'
		};

		return (
			<div className="feed" style={style}>
			

				<FeedPost title='Chai Pe Charcha' description='Discussion Over Chai' image='images/TheView.jpg' />
			</div>
		);
	}

});

module.exports = Feed;