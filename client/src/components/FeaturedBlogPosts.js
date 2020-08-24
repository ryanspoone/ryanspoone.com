import React from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import '../styles/FeaturedBlogPosts.css';
import ErrorMessage from './common/ErrorMessage.js';

export default function BlogPostList(props) {
    const { error, errorCode, data, isLoading } = props;
    if (isLoading) {
        return (
            <div className="featured-posts-grid loading">
                <div className="loading-content article">
                    <div className="stripe long-stripe"></div>
                    <div className="stripe long-stripe"></div>
                    <div className="stripe long-stripe"></div>
                </div>
            </div>
        );
    } else if (data) {
        if (isEmpty(data)) {
            return <span></span>;
        }
        return (
            <div className="featured-posts-grid">
                <div className="featured-posts-container">
                    {data.map((post, index) => {
                        return (
                            <Link key={index} className="featured-post" to={`/blog/${post.slug}`}>
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
                                            {post.tags.map((tag, index) => (
                                                <li key={index}>{tag.name}</li>
                                            ))}
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
