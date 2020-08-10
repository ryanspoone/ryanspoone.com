import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Github extends Component {
    static propTypes = {
        data: PropTypes.any,
        isLoading: PropTypes.bool,
        error: PropTypes.any
    };

    render() {
        return (
            <section id="intro" className="intro">
                <h1 className="overline">Hi, my name is</h1>
                <h2 className="title">Ryan Spoone.</h2>
                <h3 className="subtitle">I love to build cool things.</h3>
                <div className="description">
                    <p>
                        I&apos;m a software engineer based in Austin, TX specializing in designing and
                        building exceptional applications, websites, and everything in-between.
                    </p>
                </div>
                <div>
                    <a className="btn btn-primary" href="mailto:me@ryanspoone.com">
                        Get In Touch
                    </a>
                </div>
            </section>
        );
    }
}
