"use strict";

var React = require('react');

var About = React.createClass({
  render: function() {
    return (

      <div className="row icons-group about-content">
        <h4 className="page-title">About me</h4>
        <div className="col-xs-4 box">
          <div className="icons"><i className="fa fa-3x fa-television" /></div>
          <h4>Interaction Design</h4>
          <p className="desc">A great interface is based upon solid interaction design</p>
        </div>
        <div className="col-xs-4 box">
          <div className="icons"><i className="fa fa-2x fa-desktop" /></div>
          <h4>Prototyping</h4>
          <p className="desc">A prototype is great for showing new product concepts</p>
        </div>
        <div className="col-xs-4 box">
          <div className="icons"><i className="fa fa-2x fa-desktop" /></div>
          <h4>Visual Design</h4>
          <p className="desc">I strive for effective design. That often comes down to the art of reduction</p>
        </div>
        <div className="clearfix" />
        <div className="bottom-line">
          <p className="general-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime molestiae, voluptate! Consectetur dicta dolores eum impedit ipsum obcaecati placeat ullam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum iure nulla obcaecati repellat repudiandae sunt veniam? Atque consequatur deleniti dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam deserunt doloremque doloribus dolorum impedit iusto, libero magni, nesciunt odit quos rerum saepe sapiente! A aperiam asperiores delectus iusto maxime numquam odit porro quibusdam, quod repudiandae rerum saepe ullam vel?
          </p>
        </div>
      </div>
    );
  }
});


module.exports = About;