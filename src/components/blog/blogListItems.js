"use strict";

var React = require('react');
var Router = require('react-router');


var BlogList = React.createClass({
  mixins: [
      Router.Navigation
  ],

  showArticle: function(articleName, type, event) {

      this.transitionTo('article', { name: articleName});
  },

  render: function() {
    var createBlock = function(article) {
      if(article.id === 'video') {
        return (
            <div className="article-intro-holder" key={article.title} onClick={this.showArticle.bind(this, article.link, 'video')}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
           </div>
        );
      }else {
        return (
             <div className="article-intro-holder" key={article.id} onClick={this.showArticle.bind(this, article.id)}>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
             </div>
         );
      }

    };

    return (
        <div>
            {this.props.articles.map(createBlock, this)}
        </div>
    );
  }
});

module.exports = BlogList;