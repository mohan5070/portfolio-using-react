"use strict";

var React = require('react');
var ArticleParser = require('./articleParser');
var cleanCode = require('../../articleContent/cleanCodeConvention');
var uxPrincipals = require('../../articleContent/uxPrincipals');
var bangaloreToKanniyakumari = require('../../articleContent/bangaloreToKanniyakumari');
var gettingStarterKit = require('../../articleContent/gettingStarterKit');
var html5WebComponents = require('../../articleContent/html5WebComponents');
var javascriptHiccups = require('../../articleContent/javascriptHiccups');
var webApplicationCaching = require('../../articleContent/webApplicationCaching');
var whatDefinesYou = require('../../articleContent/whatDefinesYou');

var ArticlePage = React.createClass({
  getInitialState: function() {
      return {
          contentData: {
              title: '',
              date: '',
              content: ''
          }
      };
  },

  componentWillMount: function() {
      var pages = {
        cleanCode: cleanCode,
        uxPrincipals: uxPrincipals,
        bangaloreToKanniyakumari: bangaloreToKanniyakumari,
        gettingStarterKit: gettingStarterKit,
        html5WebComponents: html5WebComponents,
        javascriptHiccups: javascriptHiccups,
        webApplicationCaching: webApplicationCaching,
        whatDefinesYou: whatDefinesYou
      };

      this.setState({contentData: pages[this.props.params.name]});
  },

  render: function() {
    return (
        <div className="article-container">
        <ArticleParser contentData={this.state.contentData} />
        </div>
    );
  }
});

module.exports = ArticlePage;