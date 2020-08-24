import React, { Component } from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';

import '../styles/Home.css';
import Client from '../Client.js';
import Intro from './Intro.js';
import About from './About.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.client = new Client();

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
        // Make sure we are at the top of the page when
        // this page loads.
        window.scrollTo(0, 0);

        try {
            this.getFeaturedRepos();
            this.getLinkedInJobs();
            this.getUserStats();
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

    async getFeaturedRepos() {
        const data = await this.client.fetchRequest('/api/github/featured', 'githubFeatured');
        this.setState(data);
    }

    async getUserStats() {
        const data = await this.client.fetchRequest('/api/github/stats', 'githubUser');
        this.setState(data);
    }

    async getLinkedInJobs() {
        const data = await this.client.fetchRequest('/api/linkedin', 'linkedin');
        this.setState(data);
    }

    render() {
        return (
            <main role="main" className="main fill-height">
                <Intro />
                <About />
                <Experience
                    data={get(this.state, 'linkedin.data')}
                    error={get(this.state, 'linkedin.error')}
                    errorCode={get(this.state, 'linkedin.errorCode')}
                    isLoading={get(this.state, 'linkedin.isLoading')}
                />
                <Projects
                    githubFeatured={get(this.state, 'githubFeatured')}
                    githubUser={get(this.state, 'githubUser')}
                />
                <Contact />
            </main>
        );
    }
}
