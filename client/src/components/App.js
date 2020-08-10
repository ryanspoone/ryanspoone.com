import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import EmailSidebar from './EmailSidebar';
import NotFound from './NotFound';

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
            }
        };
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
            <div className="layout">
                <Header />
                <SocialSidebar />
                <EmailSidebar />

                <Switch>
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
