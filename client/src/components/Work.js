import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { get, isString } from 'lodash';

export default class Github extends Component {
    static propTypes = {
        data: PropTypes.any,
        isLoading: PropTypes.bool,
        error: PropTypes.any
    };

    render() {
        if (get(this.props, 'isLoading')) {
            return (
                <section id="work" className="work">
                    <h3 className="heading">Some Things I&apos;ve Built</h3>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </section>
            );
        } else if (get(this.props, 'data')) {
            let data = get(this.props, 'data');
            if (!isString(data)) {
                data = JSON.stringify(data);
            }
            return (
                <section id="work" className="work">
                    <h3 className="heading">Some Things I&apos;ve Built</h3>
                    <div>
                        <p>Data returned from the API:</p>
                        <code>{data}</code>
                    </div>
                </section>
            );
        } else {
            return (
                <section id="work" className="work">
                    <h3 className="heading">Some Things I&apos;ve Built</h3>
                    <div className="alert alert-danger" role="alert">
                        An error occurred: {get(this.props, 'error', 'Unable to determine the state.')}
                    </div>
                </section>
            );
        }
    }
}
