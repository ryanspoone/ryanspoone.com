import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const GithubLink = props => {
    if (!props.url) {
        return <span></span>;
    }
    return (
        <a href={props.url} target="_blank" rel="nofollow noopener noreferrer" aria-label="GitHub Link">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549">
                <title>GitHub</title>
                <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path>
            </svg>
        </a>
    );
};
GithubLink.propTypes = {
    url: PropTypes.string
};

const ExternalLink = props => {
    if (!props.url) {
        return <span></span>;
    }
    return (
        <a href={props.url} target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818">
                <title>External</title>
                <g>
                    <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                    <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
                </g>
            </svg>
        </a>
    );
};
ExternalLink.propTypes = {
    url: PropTypes.string
};

export default class Archive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            githubRepos: {
                error: undefined,
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
        const response = await fetch('/api/github/repositories');
        const data = await response.json();
        if (response.status !== 200) {
            const error = _.get(data, 'error', data);
            this.setState({
                githubRepos: {
                    error,
                    data: undefined,
                    isLoading: false
                }
            });
        } else {
            this.setState({
                githubRepos: {
                    data,
                    error: undefined,
                    isLoading: false
                }
            });
        }
    }

    render() {
        if (_.get(this.state, 'githubRepos.isLoading')) {
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
        } else if (_.get(this.state, 'githubRepos.data')) {
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
                                {this.state.githubRepos.data.map((repo, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="overline year">
                                                {new Date(repo.createdAt).getFullYear()}
                                            </td>
                                            <td className="title">{repo.name}</td>
                                            <td className="language hide-on-mobile">{repo.language}</td>
                                            <td className="tech hide-on-mobile">
                                                {repo.repositoryTopics.map((tech, idx) => {
                                                    if (index === _.size(repo.repositoryTopics) - 1) {
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
                                                    <GithubLink url={repo.url} />
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
                <main className="archive">
                    <header>
                        <h1 className="big-title">Archive</h1>
                        <p className="subtitle">A big list on things I&apos;ve worked on</p>
                    </header>
                    <div className="alert alert-danger" role="alert">
                        An error occurred: {_.get(this.props, 'error', 'Unable to determine the state.')}
                    </div>
                </main>
            );
        }
    }
}