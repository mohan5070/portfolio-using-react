"use strict";

var React = require('react');

var PortfolioBlock = React.createClass({

  render: function() {

    var createProjectBlock = function(project) {
        return (
            <div className="project-intro-holder">
            <div className="image-holder">
                <img src={'images/' + project.imageName}/>
            </div>
            <div className="short-desc">
             <h4><a href={project.link} target="_blank">{project.projectName}</a></h4>
             </div>
        </div>
        );
    };

    return (
        <div>
            {this.props.projects.map(createProjectBlock, this)}
        </div>
    );
  }
});

module.exports = PortfolioBlock;