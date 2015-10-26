var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div className="about" style={{textAlign: 'center'}}>
				<img style={{marginTop: 50, marginBottom: 50}} width="150" height="150" src="images/blogCircle.gif"></img>
				<div style={{marginBottom: 30, fontSize: 16}}>
					Yo. Some thoughts:
				</div>
			</div>
		);
	}
});

module.exports = About;