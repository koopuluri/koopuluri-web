window.React = require('react');

var TitleContainer = require('../components/TitleContainer.react');

var title = $('#title-container').text();

var timestamp = $('#timestamp').text();
$('#timestamp').empty();

React.render(
	<TitleContainer title={title} timestamp={timestamp}/>,
	document.getElementById('title-container')
);

