import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import '../styles/GitHubStats.css';
import ErrorMessage from './common/ErrorMessage.js';

export default function UserStats({ error, errorCode, data, isLoading } = {}) {
    if (isLoading) {
        return (
            <div className="github-stats">
                <div className="loading">
                    <div className="loading-content article">
                        <div className="stripe medium-stripe"></div>

                        <div className="stripe small-stripe"></div>
                        <div className="stripe long-stripe"></div>
                        <div className="stripe medium-stripe"></div>
                        <div className="stripe long-stripe"></div>
                    </div>
                </div>
            </div>
        );
    } else if (data) {
        const drilledDownStats = _(data)
            .pick([
                'commitContributions',
                'pullRequestContributions',
                'pullRequestReviewContributions',
                'repositoriesContributedTo',
                'repositoriesWithContributedCommits',
                'repositoriesWithContributedPullRequests'
            ])
            .map((value, key) => [key, value])
            .value();
        const { totalYearContributions } = data;
        return (
            <div className="github-stats">
                <div className="total-contribution">
                    <div className="yearly-amount">{totalYearContributions}</div>
                    <div className="">contributions this year</div>
                </div>
                <div className="contribution-breakdown">
                    <ul>
                        {drilledDownStats.map(stat => {
                            const [name, value] = stat;
                            return (
                                <li key={name}>
                                    <span className="stat-amount">{value}</span> {_.startCase(name)}
                                </li>
                            );
                        }, this)}
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="github-stats">
                <ErrorMessage errorCode={errorCode} error={error} />
            </div>
        );
    }
}

UserStats.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    errorCode: PropTypes.number
};
