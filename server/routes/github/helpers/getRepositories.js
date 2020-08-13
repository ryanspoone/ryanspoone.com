import _ from 'lodash';
import github from './github.js';
import query from '../queries/repos.js';

const simplifyRepositories = response => {
    const repositories = _.get(response, 'data.user.repositories.edges');

    return _(repositories)
        .map(repository => {
            const repo = _.get(repository, 'node');
            return {
                name: _.get(repo, 'name'),
                url: _.get(repo, 'url'),
                isTemplate: _.get(repo, 'isTemplate'),
                description: _.get(repo, 'shortDescriptionHTML'),
                language: _.get(repo, 'primaryLanguage.name'),
                forkCount: _.get(repo, 'forkCount'),
                starCount: _.get(repo, 'stargazers.totalCount'),
                updatedAt: _.get(repo, 'updatedAt'),
                createdAt: _.get(repo, 'createdAt'),
                issueCount: _.get(repo, 'issues.totalCount'),
                pullRequestCount: _.get(repo, 'pullRequests.totalCount'),
                repositoryTopics: _.map(_.get(repo, 'repositoryTopics.edges'), topic =>
                    _.get(topic, 'node.topic.name')
                ),
                isPrivate: _.get(repo, 'isPrivate'),
                homepageUrl: _.get(repo, 'homepageUrl')
            };
        })
        .orderBy('createdAt', 'desc')
        .value();
};
export default async function getRepositories() {
    const response = await github(await query);
    return simplifyRepositories(response);
}
