"use strict";

var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;

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
          <li data-page="intro">
          <Link to="/" activeClassName="active" onlyActiveOnIndex >Home</Link>
          </li>
          <li data-page="about">
          <Link to="about" activeClassName="active" onlyActiveOnIndex >About</Link>
          </li>
          <li data-page="portfolio">
            <Link to="portfolio" activeClassName="active" onlyActiveOnIndex >Portfolio</Link>
          </li>
          <li data-page="blog">
          <Link to="blog" activeClassName="active" onlyActiveOnIndex >Blog</Link>

          </li>
          <li data-page="contact">
            <Link to="contact" activeClassName="active" onlyActiveOnIndex >Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;