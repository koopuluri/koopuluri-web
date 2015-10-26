var React = require('react');

// expected props:
// title - the damn title.
// timestamp 
var Title = React.createClass({

	render: function() {
		var style = {
			textAlign: 'center',
			marginBottom: 30
		};

		var navbarStyle = {
			textAlign: 'left',
			fontSize: 20,
			fontWeight: 900
		};

		return (
			<div>
				<a href="/" style={navbarStyle}>
					Koopuluri
				</a>
				<div className="title-container" style={style}>
					<h1> {this.props.title} </h1>
					<p> {this.props.timestamp} </p>
				</div>
			</div>
		);
	},
});

module.exports = Title;