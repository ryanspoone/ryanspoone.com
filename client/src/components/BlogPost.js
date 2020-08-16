import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class BlogPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: {
                error: undefined,
                data: undefined,
                isLoading: true
            }
        };
    }

    componentDidMount() {
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
        console.log('ryan', data);
        if (response.status !== 200) {
            const error = _.get(data, 'error', data);
            this.setState({
                blogPosts: {
                    error,
                    data: undefined,
                    isLoading: false
                }
            });
        } else {
            this.setState({
                blogPosts: {
                    data,
                    error: undefined,
                    isLoading: false
                }
            });
        }
    }

    render() {
        if (_.get(this.state, 'blogPosts.isLoading')) {
            return (
                <main className="main blog-post">
                    <header>
                        <h1 className="big-title">Blog Post</h1>
                    </header>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </main>
            );
        } else if (_.get(this.state, 'blogPosts.data')) {
            const post = _.get(this.state, 'blogPosts.data');
            const title = _.get(post, 'title');
            const htmlBody = _.get(post, 'html');
            return (
                <main className="main blog-post">
                    <h1>{title}</h1>
                    <div className="post-container" dangerouslySetInnerHTML={{ __html: htmlBody }}></div>
                </main>
            );
        } else {
            return (
                <main className="main blog-post">
                    <header>
                        <h1 className="big-title">Blog Post</h1>
                    </header>
                    <div className="alert alert-danger" role="alert">
                        An error occurred: {_.get(this.props, 'error', 'Unable to determine the state.')}
                    </div>
                </main>
            );
        }
    }
}

BlogPost.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string
        })
    })
};
