import _ from 'lodash';
import github from './github';
import query from '../queries/featured';

const simplifyFeatured = response => {
    const featuredRepos = _.get(response, 'data.user.pinnedItems.edges');

    return _.map(featuredRepos, featuredRepo => {
        const repo = _.get(featuredRepo, 'node');
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
            homepageUrl: _.get(repo, 'homepageUrl')
        };
    });
};

export default async function getFeatured() {
    const response = await github(await query);
    return simplifyFeatured(response);
}
