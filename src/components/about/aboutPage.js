"use strict";

var React = require('react');

var About = React.createClass({
  render: function() {
    return (

      <div className="row icons-group about-content">
        <h4 className="page-title">About me</h4>
        <div className="col-xs-4 box">
          <div className="icons"><i className="fa fa-2x fa-hand-pointer-o" /></div>
          <h4>Interaction Design</h4>
          <p className="desc">A great interface is based upon solid interaction design</p>
        </div>
        <div className="col-xs-4 box">
          <div className="icons"><i className="fa fa-2x fa-gears" /></div>
          <h4>Prototyping</h4>
          <p className="desc">A prototype is great for showing new product concepts</p>
        </div>
        <div className="col-xs-4 box">
          <div className="icons"><i className="fa fa-2x fa-address-card-o" /></div>
          <h4>Visual Design</h4>
          <p className="desc">I strive for effective design. That often comes down to the art of reduction</p>
        </div>
        <div className="clearfix" />
        <div className="bottom-line">
          <p className="general-desc">
            I am a Interaction developer with experience in all aspects of Front end web development including Interaction design, Information Architecture, Javascript, React, Flux, Redux, Backbone, Knockout, Jasmine, Mocha, Node.js, Cordova, Phonegap, Core java, Angular.js, MongoDB.
          </p>
        </div>
      </div>
    );
  }
});


module.exports = About;