import _ from 'lodash';
import github from './github.js';
import query from '../queries/repo.js';

const simplifyStats = stats => {
    const data = _.get(stats, 'data.user.repository');

    return {
        githubForks: _.get(data, 'forkCount', 0),
        githubStars: _.get(data, 'stargazers.totalCount', 0)
    };
};

export default async function getRepoStats() {
    const response = await github(await query);
    return simplifyStats(response);
}
