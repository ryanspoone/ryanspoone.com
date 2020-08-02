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
                <h1>Hi, my name is</h1>
                <h2>Ryan Spoone.</h2>
                <h3>I love to build cool things.</h3>
                <div>
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
