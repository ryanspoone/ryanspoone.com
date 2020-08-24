import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import pick from 'lodash/pick';
import map from 'lodash/map';

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
        let drilledDownStats = pick(data, [
            'commitContributions',
            'pullRequestContributions',
            'pullRequestReviewContributions',
            'repositoriesContributedTo',
            'repositoriesWithContributedCommits',
            'repositoriesWithContributedPullRequests'
        ]);
        drilledDownStats = map(drilledDownStats, (value, key) => [key, value]);

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
                                    <span className="stat-amount">{value}</span> {startCase(name)}
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
