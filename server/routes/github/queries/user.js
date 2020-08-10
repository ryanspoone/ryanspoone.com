export default `query {
    user(login: "ryanspoone") {
      name
      gists {
        totalCount
      }
      repositories {
        totalCount
      }
      commitComments {
        totalCount
      }
      issueComments {
        totalCount
      }
      repositoriesContributedTo {
          totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }

        totalIssueContributions
        totalCommitContributions
        totalRepositoryContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalRepositoriesWithContributedIssues
        totalRepositoriesWithContributedCommits
        totalRepositoriesWithContributedPullRequests
      }
      pullRequests {
        totalCount
      }
      topRepositories(first: 5 orderBy: {field: NAME direction: DESC}) {
        edges{
          node {
            name
            primaryLanguage {
              name
            }
          }
        }
      }
    }
}`;
