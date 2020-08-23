import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import '../styles/BlogPosts.css';

const PostLink = props => {
    if (!props.slug) {
        return <span></span>;
    }
    if (props.title) {
        return <Link to={`/blog/${props.slug}`}>{props.title}</Link>;
    }
    return (
        <Link to={`/blog/${props.slug}`}>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818">
                <title>External</title>
                <g>
                    <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                    <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
                </g>
            </svg>
        </Link>
    );
};
PostLink.propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string
};

export default class BlogPosts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: {
                error: undefined,
                errorCode: undefined,
                data: undefined,
                isLoading: true
            }
        };
    }

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
        const response = await fetch('/api/blog');
        const data = await response.json();
        if (response.status !== 200) {
            const error = _.get(data, 'error', data);
            this.setState({
                blogPosts: {
                    error,
                    errorCode: response.status,
                    data: undefined,
                    isLoading: false
                }
            });
        } else {
            this.setState({
                blogPosts: {
                    data,
                    errorCode: undefined,
                    error: undefined,
                    isLoading: false
                }
            });
        }
    }

    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    render() {
        const location = _.get(this.props, 'location.pathname');
        const { error, errorCode, data, isLoading } = _.get(this.state, 'blogPosts', {});
        if (isLoading) {
            return (
                <main className="blog-posts">
                    <header>
                        <h1 className="big-title">Blog Posts</h1>
                    </header>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </main>
            );
        } else if (data) {
            return (
                <main className="blog-posts">
                    <header>
                        <h1 className="big-title">Blog Posts</h1>
                    </header>
                    <div className="blog-posts-container">
                        <table className="blog-posts-table">
                            <thead>
                                <tr>
                                    <th>Published</th>
                                    <th>Title</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((post, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="overline published">
                                                {new Date(post.published_at).toLocaleDateString()}
                                            </td>
                                            <td className="title">
                                                <PostLink slug={post.slug} title={post.title} />
                                            </td>
                                            <td className="links">
                                                <span>
                                                    <PostLink slug={post.slug} />
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
