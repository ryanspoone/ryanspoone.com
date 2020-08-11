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
            <footer className="foot">
                <div className="metadata">
                    <a
                        href="https://github.com/ryanspoone/ryanspoone.com"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                    >
                        <div>
                            Built with{' '}
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14px"
                                    height="14px"
                                    viewBox="0 0 14 14"
                                    version="1.1"
                                >
                                    <g id="surface1">
                                        <path
                                            style={{
                                                stroke: 'none',
                                                fillRule: 'evenodd',
                                                fill: 'rgb(100, 255, 218)',
                                                fillOpacity: 1
                                            }}
                                            d="M 7 12.597656 C 3.714844 9.363281 0.582031 6.589844 0.582031 4.195312 C 0.582031 1.984375 2.371094 1.167969 3.664062 1.167969 C 4.429688 1.167969 6.085938 1.457031 7 3.765625 C 7.925781 1.453125 9.605469 1.171875 10.339844 1.171875 C 11.820312 1.171875 13.417969 2.117188 13.417969 4.195312 C 13.417969 6.566406 10.421875 9.226562 7 12.597656 M 10.339844 0.589844 C 9.054688 0.589844 7.746094 1.195312 7 2.476562 C 6.25 1.191406 4.945312 0.582031 3.664062 0.582031 C 1.808594 0.582031 0 1.859375 0 4.195312 C 0 6.914062 3.25 9.695312 7 13.417969 C 10.75 9.695312 14 6.914062 14 4.195312 C 14 1.855469 12.195312 0.589844 10.339844 0.589844 "
                                        />
                                    </g>
                                </svg>
                            </span>{' '}
                            by Ryan Spoone
                        </div>
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
                </div>
            </footer>
        );
    }
}
