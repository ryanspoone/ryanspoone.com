export default `query {
    user(login: "ryanspoone") {
      repositoriesContributedTo {
          totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
        totalCommitContributions
        totalRepositoryContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalRepositoriesWithContributedCommits
        totalRepositoriesWithContributedPullRequests
      }
    }
}`;
