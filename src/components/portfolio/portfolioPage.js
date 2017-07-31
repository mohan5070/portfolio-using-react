"use strict";

var React = require('react');
var ProjectsData = require('./portfolioData');
var PortfolioBlock = require('./porfolioIntroBlock');

var Portfolio = React.createClass({
  getInitialState: function() {
      return {
          projects: ProjectsData.projects
      };
  },

  render: function() {
    return (
      <div className="row portfolio-content">
         <PortfolioBlock projects = {this.state.projects} />
      </div>
    );
  }
});

module.exports = Portfolio;