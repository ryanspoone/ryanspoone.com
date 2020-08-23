import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import '../styles/App.css';
import Client from '../Client.js';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
import SocialSidebar from './SocialSidebar.js';
import EmailSidebar from './EmailSidebar.js';
import NotFound from './NotFound.js';
import Archive from './Archive.js';
import BlogPosts from './BlogPosts.js';
import BlogPost from './BlogPost.js';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.client = new Client();

        this.state = {
            githubRepo: {
                error: undefined,
                errorCode: undefined,
                data: undefined,
                isLoading: true
            },
            isMenuShowing: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ isMenuShowing: !this.state.isMenuShowing });
    }

    componentDidMount() {
        try {
            this.getRepoStats();
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

    componentWillUnmount() {
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    async getRepoStats() {
        const data = await this.client.fetchRequest('/api/github', 'githubRepo');
        this.setState(data);
    }

    render() {
        return (
            <div className={`layout ${this.state.isMenuShowing ? 'blur' : ''}`}>
                <Header toggle={this.toggleMenu} isShowing={_.get(this.state, 'isMenuShowing')} />
                <SocialSidebar />
                <EmailSidebar />

                <Switch>
                    <Route exact path="/blog" component={BlogPosts} />
                    <Route path="/blog/:slug" component={BlogPost} />
                    <Route exact path="/archive" component={Archive} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>

                <Footer
                    data={_.get(this.state, 'githubRepo.data')}
                    error={_.get(this.state, 'githubRepo.error')}
                    isLoading={_.get(this.state, 'githubRepo.isLoading')}
                />
            </div>
        );
    }
}
