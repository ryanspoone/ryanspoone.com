import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import get from 'lodash/get';

import '../styles/NotFound.css';

export default function NotFound(props) {
    return (
        <main className="main not-found fill-height">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <code>{get(props, 'location.pathname')}</code>
            <Link className="btn btn-primary" to="/">
                Go Home
            </Link>
        </main>
    );
}

NotFound.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string
    })
};
