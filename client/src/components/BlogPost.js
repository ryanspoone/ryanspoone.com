import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import '../styles/BlogPost.css';

export default class BlogPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPost: {
                error: undefined,
                errorCode: undefined,
                data: undefined,
                isLoading: true
            }
        };
    }

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                slug: PropTypes.string
            })
        })
    };

    componentDidMount() {
        // Make sure we are at the top of the page when
        // this page loads.
        window.scrollTo(0, 0);

        try {
            this.getPosts();
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

    async getPosts() {
        const { slug } = _.get(this.props, 'match.params', {});
        const response = await fetch('/api/blog/post', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ slug })
        });
        const data = await response.json();
        if (response.status !== 200) {
            const error = _.get(data, 'error', data);
            this.setState({
                blogPost: {
                    error,
                    errorCode: response.status,
                    data: undefined,
                    isLoading: false
                }
            });
        } else {
            this.setState({
                blogPost: {
                    data,
                    error: undefined,
                    errorCode: undefined,
                    isLoading: false
                }
            });
        }
    }

    render() {
        const { slug } = _.get(this.props, 'match.params', {});
        const { error, errorCode, data, isLoading } = _.get(this.state, 'blogPost', {});

        if (isLoading) {
            return (
                <main className="main blog-post">
                    <h1>{_.startCase(slug)}</h1>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </main>
            );
        } else if (data) {
            const title = _.get(data, 'title');
            const htmlBody = _.get(data, 'html');
            return (
                <main className="main blog-post">
                    <h1>{title}</h1>
                    <div className="post-container" dangerouslySetInnerHTML={{ __html: htmlBody }}></div>
                </main>
            );
        } else {
            return (
                <main className="main not-found fill-height">
                    <h1>{errorCode}</h1>
                    <h2>{error || 'Unknown error occurred.'}</h2>
                    <code>{slug}</code>
                    <Link className="btn btn-primary" to="/blog">
                        Go to Posts
                    </Link>
                </main>
            );
        }
    }
}
