import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import '../styles/FeaturedBlogPosts.css';
import ErrorMessage from './common/ErrorMessage.js';

export default function BlogPostList(props) {
    const { error, errorCode, data, isLoading } = props;
    if (isLoading) {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    } else if (data) {
        if (_.isEmpty(data)) {
            return <span></span>;
        }
        console.log(data);
        return (
            <div className="featured-posts-grid">
                <div className="featured-posts-container">
                    {data.map((post, index) => {
                        return (
                            <Link
                                tabIndex="0"
                                key={index}
                                className="featured-post"
                                data-sr-id={index}
                                to={`/blog/${post.slug}`}
                            >
                                <div className="featured-post-inner">
                                    <header>
                                        <div className="featured-post-header">
                                            <h5 className="featured-post-title">{post.title}</h5>
                                            <span className="featured-post-date">
                                                {new Date(post.published_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="featured-post-excerpt">{post.excerpt}</div>
                                        <div className="featured-post-reading-time">
                                            {post.reading_time} minute read
                                        </div>
                                    </header>
                                    <footer>
                                        <ul className="featured-post-tags">
                                            {_.get(post, 'tags', []).map((tag, index) => {
                                                if (index > 2) {
                                                    return;
                                                }
                                                return <li key={index}>{tag.name}</li>;
                                            })}
                                        </ul>
                                    </footer>
                                </div>
                            </Link>
                        );
                    }, this)}
                </div>
            </div>
        );
    } else {
        return <ErrorMessage errorCode={errorCode} error={error} />;
    }
}
