"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Sidebar = React.createClass({
  render: function() {
    return (
      <div id="sidebar-wrapper">
        <div className="brand">
          <h2 className="logo">M</h2>
          {/*<img src="" alt=""/>*/}
          <h3>Mohan</h3>
        </div>
        <ul className="sidebar-nav">
          <li className="active" data-page="intro">
          <Link to="app">Home</Link>
          </li>
          <li data-page="about">
          <Link to="about">About</Link>
          </li>
          <li data-page="portfolio">
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li data-page="blog">
          <Link to="blog">Blog</Link>

          </li>
          <li data-page="contact">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;