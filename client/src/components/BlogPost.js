import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';

import '../styles/BlogPost.css';
import Client from '../Client.js';

export default class BlogPost extends Component {
    constructor(props) {
        super(props);

        this.client = new Client();

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

    async getPosts() {
        const { slug } = get(this.props, 'match.params', {});
        const body = JSON.stringify({ slug });
        const data = await this.client.fetchRequest('/api/blog/post', 'blogPost', { body });
        this.setState(data);
    }

    render() {
        const { slug } = get(this.props, 'match.params', {});
        const { error, errorCode, data, isLoading } = this.state.blogPost;

        if (isLoading) {
            return (
                <main className="main blog-post">
                    <div className="loading">
                        <div className="loading-content article">
                            <div className="stripe medium-stripe"></div>

                            <div className="stripe long-stripe"></div>
                            <div className="stripe medium-stripe"></div>
                            <div className="stripe long-stripe"></div>
                            <div className="stripe medium-stripe"></div>
                            <div className="stripe small-stripe"></div>
                            <div className="stripe medium-stripe"></div>
                            <div className="stripe long-stripe"></div>
                        </div>
                    </div>
                </main>
            );
        } else if (data) {
            const title = get(data, 'title');
            const htmlBody = get(data, 'html');
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
