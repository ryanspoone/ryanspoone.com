import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';

import '../styles/BlogPosts.css';
import BlogPostList from './BlogPostList.js';
import FeaturedBlogPosts from './FeaturedBlogPosts.js';
import Client from '../Client.js';

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

        this.client = new Client();

        this.state = {
            blogPosts: {
                error: undefined,
                errorCode: undefined,
                data: undefined,
                isLoading: true
            },
            featuredPosts: {
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
            this.getFeaturedPosts();
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

    async getFeaturedPosts() {
        const data = await this.client.fetchRequest('/api/blog/featured', 'featuredPosts');
        this.setState(data);
    }

    async getPosts() {
        const data = await this.client.fetchRequest('/api/blog', 'blogPosts');
        this.setState(data);
    }

    render() {
        return (
            <main className="blog-posts">
                <header>
                    <h1 className="big-title">Blog Posts</h1>
                </header>
                <FeaturedBlogPosts
                    data={get(this.state, 'featuredPosts.data')}
                    error={get(this.state, 'featuredPosts.error')}
                    errorCode={get(this.state, 'featuredPosts.errorCode')}
                    isLoading={get(this.state, 'featuredPosts.isLoading')}
                />
                <BlogPostList
                    data={get(this.state, 'blogPosts.data')}
                    error={get(this.state, 'blogPosts.error')}
                    errorCode={get(this.state, 'blogPosts.errorCode')}
                    isLoading={get(this.state, 'blogPosts.isLoading')}
                />
            </main>
        );
    }
}
