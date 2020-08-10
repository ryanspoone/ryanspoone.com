import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Github extends Component {
    static propTypes = {
        data: PropTypes.any,
        isLoading: PropTypes.bool,
        error: PropTypes.any
    };

    render() {
        if (_.get(this.props, 'isLoading')) {
            return (
                <section id="work" className="work">
                    <h3 className="heading">Some Things I&apos;ve Built</h3>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </section>
            );
        } else if (_.get(this.props, 'data')) {
            let data = _.get(this.props, 'data');
            if (!_.isString(data)) {
                data = JSON.stringify(data, null, 4);
            }
            return (
                <section id="work" className="work">
                    <h3 className="heading">Some Things I&apos;ve Built</h3>
                    <div>
                        <p>Data returned from the API:</p>
                        <pre>{data}</pre>
                    </div>
                </section>
            );
        } else {
            return (
                <section id="work" className="work">
                    <h3 className="heading">Some Things I&apos;ve Built</h3>
                    <div className="alert alert-danger" role="alert">
                        An error occurred: {_.get(this.props, 'error', 'Unable to determine the state.')}
                    </div>
                </section>
            );
        }
    }
}
