"use strict";

var React = require('react');

var Blog = React.createClass({
  render: function() {
    return (
      <div className="row blog-content">
            <div className="article-intro-holder">
                 <h3>Html5 webcomponent</h3>
                 <p>lorem test testtest lorem test testtest lorem test testtest  lorem test testtest</p>
            </div>
            <div className="article-intro-holder">
                 <h3>Clean code convention</h3>
                 <p>lorem test testtest lorem test testtest lorem test testtest  lorem test testtest</p>
            </div>

        </div>
    );
  }
});

module.exports = Blog;