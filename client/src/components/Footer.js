import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Footer extends Component {
    static propTypes = {
        data: PropTypes.object,
        isLoading: PropTypes.bool,
        error: PropTypes.any
    };

    render() {
        return (
            <footer className="mastfoot mt-auto text-center">
                <a href="https://github.com/ryanspoone">
                    <div>Designed &amp; Built by Ryan Spoone</div>
                    <div className="github-stars-forks">
                        <span>
                            <svg
                                aria-label="stars"
                                viewBox="0 0 14 16"
                                version="1.1"
                                width="14"
                                height="16"
                                role="img"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                                ></path>
                            </svg>
                            <span>{_.get(this, 'props.data.githubStars', 0)}</span>
                        </span>
                        <span>
                            <svg
                                aria-label="forks"
                                viewBox="0 0 10 16"
                                version="1.1"
                                width="10"
                                height="16"
                                role="img"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                                ></path>
                            </svg>
                            <span>{_.get(this, 'props.data.githubForks', 0)}</span>
                        </span>
                    </div>
                </a>
            </footer>
        );
    }
}
