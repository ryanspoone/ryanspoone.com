export default `query {
    user(login: "ryanspoone") {
      repositories(first: 50 privacy: PUBLIC ownerAffiliations: OWNER) {
        totalCount
        edges {
          node {
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
}`;
