import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import EmailSidebar from './EmailSidebar';
import NotFound from './NotFound';
import Archive from './Archive';
import BlogPosts from './BlogPosts';
import BlogPost from './BlogPost';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            github: {
                repo: {
                    error: undefined,
                    data: undefined,
                    isLoading: true
                }
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
        const response = await fetch('/api/github');
        const data = await response.json();
        if (response.status !== 200) {
            const error = _.get(data, 'error', data);
            this.setState({
                githubRepo: {
                    error,
                    data: undefined,
                    isLoading: false
                }
            });
        } else {
            this.setState({
                githubRepo: {
                    data,
                    error: undefined,
                    isLoading: false
                }
            });
        }
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
