"use strict";

var React = require('react');
var BlogListItems = require('./blogListItems');
var BlogListData = require('./blogListData');

var Blog = React.createClass({

  render: function() {
    return (
        <div className="row blog-content">
            <BlogListItems articles = {BlogListData.articles} />
        </div>
    );
  }
});

module.exports = Blog;