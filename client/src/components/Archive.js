import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

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
            let error = _.get(err, 'message') || _.get(err, 'error', err);
            if (_.isEmpty(error)) {
                error = 'An error status was returned but no error message.';
            }
            if (!_.isString(error)) {
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
        const location = _.get(this.props, 'location.pathname');
        const { error, errorCode, data, isLoading } = _.get(this.state, 'githubRepos', {});

        if (isLoading) {
            return (
                <main className="archive">
                    <header>
                        <h1 className="big-title">Archive</h1>
                        <p className="subtitle">A big list on things I&apos;ve worked on</p>
                    </header>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
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
                                                    if (idx === _.size(repo.repositoryTopics) - 1) {
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
