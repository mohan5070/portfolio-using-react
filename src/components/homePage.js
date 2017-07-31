"use strict";

var React = require('react');

var Home = React.createClass({
   render: function() {
       return (
            <div className="row text-center intro-content">
                <div className="image-cropper">
                    <img src="images/profile.jpg" className="rounded" />
                </div>
                <h3 className="desig">&lt;WEB DEVELOPER/&gt;</h3>
                <div className="icons-group">
                    <div className="icons"><i className="fa fa-2x fa-desktop"></i></div> <span>or</span>
                    <div className="icons"><i className="fa fa-3x fa-mobile-phone"></i></div> <span>or</span>
                    <div className="icons"><i className="fa fa-3x fa-tablet"></i></div>
                </div>
                <p>Action speaks louder than words</p>
            </div>
       );
   }
});

module.exports = Home;