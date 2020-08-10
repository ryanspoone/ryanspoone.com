import _ from 'lodash';
// @FIXME
import stats from './repoStats.json';

// query {
//     user(login: "ryanspoone") {
//       repository(name: "ryanspoone.com") {
//         stargazers {
//           totalCount
//         }
//         forkCount
//       }
//     }
// }

const simplifyStats = stats => {
    const data = _.get(stats, 'data.user.repository');

    return {
        githubForks: _.get(data, 'forkCount', 0),
        githubStars: _.get(data, 'stargazers.totalCount', 0)
    };
};
export default async function getRepoStats() {
    return await Promise.resolve(simplifyStats(stats));
}
