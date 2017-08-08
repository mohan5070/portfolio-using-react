"use strict";

var React = require('react');

var Contact = React.createClass({
    render: function() {
        return (
            <div className="row contact-conent">
                <h3 className="text-center">Email: <a href="mailto:mohan5070@gmail.com">mohan5070@gmail.com</a></h3>
            </div>
        );
    }
});

module.exports = Contact;