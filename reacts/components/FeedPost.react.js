var React = require('react')
var mui = require('material-ui');
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardTitle = mui.CardTitle;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var List = mui.List;
var ListItem = mui.ListItem;
var Colors = mui.Styles.Colors;
var TextField = mui.TextField;
var FlatButton = mui.FlatButton;
var Avatar = mui.Avatar;
var IconButton = mui.IconButton;
var ListItem = mui.ListItem;

// expected props:
// - Title
// - description
// - image
var FeedPost = React.createClass({

	getInitialState: function() {
		return {
			bgColor: '#fff'
		};
	},

	_onHighlightMouseOver: function() {
		this.setState({bgColor: '#e9e9e9'});
	},

	_onHighlightMouseExit: function() {
		this.setState({bgColor: '#fff'});
	},

	_onClick: function() {
		window.location = '/poop';
	},

	render: function() {
		var style = {
			backgroundColor: this.state.bgColor,
			cursor: 'pointer'
		};

		var leftAvatar = <Avatar src={this.props.image} size={80} />

		return (
			<div className="feedpost" 
				onClick={this._onClick}
				style={style}
				onMouseOver={this._onHighlightMouseOver}
        		onMouseOut={this._onHighlightMouseExit}>

					<ListItem
							leftAvatar = {leftAvatar}
							style = {{paddingBottom : 20}}
							disabled = {true}
							primaryText= {
								<p style = {{ paddingLeft: 100, paddingTop: 0, fontWeight: 800, fontSize: 20}}> {this.props.title} </p>
							}
							secondaryText = {
								<p style = {{ paddingLeft: 100, fontSize: 14}}> {this.props.description} </p>
							} 
					></ListItem>
			</div>
		);
	}
});

module.exports = FeedPost;