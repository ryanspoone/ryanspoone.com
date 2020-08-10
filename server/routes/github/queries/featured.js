export default `query {
    user(login: "ryanspoone") {
        pinnedItems(first: 10) {
            totalCount
            pageInfo {
                hasNextPage
            }
            edges {
                node {
                    ... on Repository {
                        name
                        url
                        isTemplate
                        shortDescriptionHTML
                        primaryLanguage {
                            name
                        }
                        forkCount
                        updatedAt
                        createdAt
                        isPrivate
                        homepageUrl
                        stargazers {
                            totalCount
                        }
                        issues {
                            totalCount
                        }
                        pullRequests {
                            totalCount
                        }
                        repositoryTopics(first: 3) {
                            edges {
                                node {
                                    topic {
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}`;
