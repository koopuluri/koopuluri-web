var React = require('react')

var Nav = React.createClass({

    render: function() {
        var linkStyle={color: 'black'};

        return (
            <div className="container-fluid">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" dataToggle="collapse" dataTarget="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">Koopuluri</a>
                </div>

                <div style={{color: 'black'}} className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a style={linkStyle} href="index.html">Home</a>
                        </li>
                        <li>
                            <a style={linkStyle} href="about.html">Blog</a>
                        </li>
                        <li>
                            <a style={linkStyle} href="about.html">Projects</a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;