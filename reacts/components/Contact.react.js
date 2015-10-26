var React = require('react');

var Contact = React.createClass({

	render: function() {
		var style={
			marginTop: 20,
			textAlign: 'center',
			color: '#909090',
			paddingLeft: 50,
			paddingRight: 50
		};	

		return (
			<div className="contact" style={style}>
				Always down for a conversation: koopuluri@gmail.com
			</div>
		);
	}
});

module.exports = Contact;