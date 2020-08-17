import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage({ errorCode, error } = {}) {
    return (
        <div className="section-error">
            <h2>Oh no! Something went wrong...</h2>
            <h4>{errorCode}</h4>
            <code>{error || 'Unknown error occurred.'}</code>
        </div>
    );
}
ErrorMessage.propTypes = {
    errorCode: PropTypes.number,
    error: PropTypes.string
};
