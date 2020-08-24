import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import size from 'lodash/size';

import '../styles/Archive.css';
import Client from '../Client.js';
import { prettifyTitle } from '../utils.js';
import GitHubLink from './common/GitHubLink.js';
import ExternalLink from './common/ExternalLink.js';

export default class Archive extends Component {
    constructor(props) {
        super(props);

        this.client = new Client();

        this.state = {
            githubRepos: {
                error: undefined,
                errorCode: undefined,
                data: undefined,
                isLoading: true
            }
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        try {
            this.getRepos();
        } catch (err) {
            let error = get(err, 'message') || get(err, 'error', err);
            if (isEmpty(error)) {
                error = 'An error status was returned but no error message.';
            }
            if (!isString(error)) {
                error = JSON.stringify(error);
            }
            console.error('Thrown error from server:', error);
        }
    }

    async getRepos() {
        const data = await this.client.fetchRequest('/api/github/repositories', 'githubRepos');
        this.setState(data);
    }

    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    render() {
        const location = get(this.props, 'location.pathname');
        const { error, errorCode, data, isLoading } = get(this.state, 'githubRepos', {});

        if (isLoading) {
            return (
                <main className="archive">
                    <header>
                        <h1 className="big-title">Archive</h1>
                        <p className="subtitle">A big list on things I&apos;ve worked on</p>
                    </header>
                    <div className="loading">
                        <div className="loading-content">
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe long-stripe"></div>
                        </div>
                    </div>
                </main>
            );
        } else if (data) {
            return (
                <main className="archive">
                    <header>
                        <h1 className="big-title">Archive</h1>
                        <p className="subtitle">A big list on things I&apos;ve worked on</p>
                    </header>
                    <div className="archive-container">
                        <table className="archive-table">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Title</th>
                                    <th className="hide-on-mobile">Built with</th>
                                    <th className="hide-on-mobile">Tech</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((repo, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="overline year">
                                                {new Date(repo.createdAt).getFullYear()}
                                            </td>
                                            <td className="title">{prettifyTitle(repo.name)}</td>
                                            <td className="language hide-on-mobile">{repo.language}</td>
                                            <td className="tech hide-on-mobile">
                                                {repo.repositoryTopics.map((tech, idx) => {
                                                    if (idx === size(repo.repositoryTopics) - 1) {
                                                        return <span key={idx}>{tech}</span>;
                                                    }
                                                    return (
                                                        <span key={idx}>
                                                            {tech}
                                                            <span className="separator">·</span>
                                                        </span>
                                                    );
                                                })}
                                            </td>
                                            <td className="links">
                                                <span>
                                                    <GitHubLink url={repo.url} />
                                                    <ExternalLink url={repo.homepageUrl} />
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                }, this)}
                            </tbody>
                        </table>
                    </div>
                </main>
            );
        } else {
            return (
                <main className="main not-found fill-height">
                    <h1>{errorCode}</h1>
                    <h2>{error || 'Unknown error occurred.'}</h2>
                    <code>{location}</code>
                    <Link className="btn btn-primary" to="/">
                        Go Home
                    </Link>
                </main>
            );
        }
    }
}
