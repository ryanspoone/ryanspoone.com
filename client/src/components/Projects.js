import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import '../styles/Projects.css';
import FeaturedProjects from './FeaturedProjects.js';

export default function Projects({ githubFeatured } = {}) {
    return (
        <section id="projects" className="projects">
            <h3 className="heading">What I&apos;ve Been Up To</h3>
            <h4>Some Things I&apos;ve Built</h4>
            <FeaturedProjects
                data={get(githubFeatured, 'data')}
                error={get(githubFeatured, 'error')}
                errorCode={get(githubFeatured, 'errorCode')}
                isLoading={get(githubFeatured, 'isLoading')}
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
