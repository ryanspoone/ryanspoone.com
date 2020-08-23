import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

import '../styles/Projects.css';
import GitHubStats from './GitHubStats.js';
import FeaturedProjects from './FeaturedProjects.js';

export default function Projects({ githubFeatured, githubUser } = {}) {
    return (
        <section id="projects" className="projects">
            <h3 className="heading">What I&apos;ve Been Up To</h3>
            <h4>Some Stats From GitHub</h4>
            <GitHubStats
                data={_.get(githubUser, 'data')}
                error={_.get(githubUser, 'error')}
                errorCode={_.get(githubUser, 'errorCode')}
                isLoading={_.get(githubUser, 'isLoading')}
            />
            <h4>Some Things I&apos;ve Built</h4>
            <FeaturedProjects
                data={_.get(githubFeatured, 'data')}
                error={_.get(githubFeatured, 'error')}
                errorCode={_.get(githubFeatured, 'errorCode')}
                isLoading={_.get(githubFeatured, 'isLoading')}
            />
            <Link to="/archive" className="archive-link">
                view the archive
            </Link>
        </section>
    );
}
Projects.propTypes = {
    githubFeatured: PropTypes.shape({
        data: PropTypes.array,
        isLoading: PropTypes.bool,
        error: PropTypes.string,
        errorCode: PropTypes.number
    }),
    githubUser: PropTypes.shape({
        data: PropTypes.object,
        isLoading: PropTypes.bool,
        error: PropTypes.string,
        errorCode: PropTypes.number
    })
};
