import _ from 'lodash';
import github from './github.js';
import query from '../queries/user.js';

const simplifyStats = stats => {
    const data = _.get(stats, 'data.user');

    return {
        totalYearContributions: _.get(
            data,
            'contributionsCollection.contributionCalendar.totalContributions',
            0
        ),
        commitContributions: _.get(data, 'contributionsCollection.totalCommitContributions', 0),
        pullRequestContributions: _.get(data, 'contributionsCollection.totalPullRequestContributions', 0),
        pullRequestReviewContributions: _.get(
            data,
            'contributionsCollection.totalPullRequestReviewContributions',
            0
        ),
        repositoriesWithContributedCommits: _.get(
            data,
            'contributionsCollection.totalRepositoriesWithContributedCommits',
            0
        ),
        repositoriesWithContributedPullRequests: _.get(
            data,
            'contributionsCollection.totalRepositoriesWithContributedPullRequests',
            0
        ),
        repositoriesContributedTo: _.get(data, 'repositoriesContributedTo.totalCount', 0)
    };
};

export default async function getUserStats() {
    const response = await github(await query);
    return simplifyStats(response);
}
