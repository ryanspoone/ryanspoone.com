import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class NotFound extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    render() {
        return (
            <main className="main not-found fill-height fade-enter-done">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <code>{_.get(this.props, 'location.pathname')}</code>
                <Link className="btn btn-primary" to="/">
                    Go Home
                </Link>
            </main>
        );
    }
}

export default NotFound;
