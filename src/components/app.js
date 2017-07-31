/*eslint-disable strict*/

var React = require('react');
var Sidebar = require('./common/sidebar');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function () {
        return (
            <div id="wrapper">
                <Sidebar/>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <RouteHandler/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;