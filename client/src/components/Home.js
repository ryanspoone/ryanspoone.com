import React, { Component } from 'react';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';

import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            githubUser: {
                error: undefined,
                errorCode: undefined,
                data: undefined,
                isLoading: true
            },
            githubFeatured: {
                error: undefined,
                errorCode: undefined,
                data: undefined,
                isLoading: true
            },
            linkedin: {
                data: undefined,
                isLoading: true,
                errorCode: undefined,
                error: undefined
            }
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        try {
            this.getFeaturedRepos();
            this.getLinkedInJobs();
            // @TODO
            // this.getUserStats();
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

    async getFeaturedRepos() {
        const response = await fetch('/api/github/featured');
        const data = await response.json();
        if (response.status !== 200) {
            const error = _.get(data, 'error', data);
            this.setState({
                githubFeatured: {
                    error,
                    errorCode: response.status,
                    data: undefined,
                    isLoading: false
                }
            });
        } else {
            this.setState({
                githubFeatured: {
                    data,
                    error: undefined,
                    errorCode: undefined,
                    isLoading: false
                }
            });
        }
    }

    async getUserStats() {
        const response = await fetch('/api/github/stats');
        const data = await response.json();
        if (response.status !== 200) {
            const error = _.get(data, 'error', data);
            this.setState({
                githubUser: {
                    error,
                    errorCode: response.status,
                    data: undefined,
                    isLoading: false
                }
            });
        } else {
            this.setState({
                githubUser: {
                    data,
                    error: undefined,
                    errorCode: undefined,
                    isLoading: false
                }
            });
        }
    }

    async getLinkedInJobs() {
        const response = await fetch('/api/linkedin');
        const data = await response.json();
        if (response.status !== 200) {
            const error = _.get(data, 'error', data);
            this.setState({
                linkedin: {
                    data: undefined,
                    error,
                    errorCode: response.status,
                    isLoading: false
                }
            });
        } else {
            this.setState({
                linkedin: {
                    data,
                    error: undefined,
                    errorCode: undefined,
                    isLoading: false
                }
            });
        }
    }

    render() {
        return (
            <main role="main" className="main fill-height">
                <Intro />
                <About />
                <Experience
                    data={_.get(this.state, 'linkedin.data')}
                    error={_.get(this.state, 'linkedin.error')}
                    errorCode={_.get(this.state, 'linkedin.errorCode')}
                    isLoading={_.get(this.state, 'linkedin.isLoading')}
                />
                <Projects
                    data={_.get(this.state, 'githubFeatured.data')}
                    error={_.get(this.state, 'githubFeatured.error')}
                    errorCode={_.get(this.state, 'githubFeatured.errorCode')}
                    isLoading={_.get(this.state, 'githubFeatured.isLoading')}
                />
                <Contact />
            </main>
        );
    }
}
