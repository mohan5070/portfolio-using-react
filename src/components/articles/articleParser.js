"use strict";

var React = require('react');

var ArticlePage = React.createClass({

    render: function() {
        return (
            <div>
                <h2> { this.props.contentData.title } </h2>
                <div className="article-content">
                <div dangerouslySetInnerHTML={{__html: this.props.contentData.content}}></div>
                </div>
            </div>
        );
    }
});

module.exports = ArticlePage;