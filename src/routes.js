"use strict";

var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}></DefaultRoute>
        <NotFoundRoute handler={require('./components/notFoundPage')}></NotFoundRoute>
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <Route name="portfolio" handler={require('./components/portfolio/portfolioPage')} />
        <Route name="blog" handler={require('./components/blog/blogPage')} />
        <Route name="article" path="article/:name" handler={require('./components/articles/articlePage')} />
        <Route name="contact" handler={require('./components/contact/contactPage')} />
    </Route>
    );

module.exports = routes;