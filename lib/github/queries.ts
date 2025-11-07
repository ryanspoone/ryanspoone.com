export const featuredQuery = `query {
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

export const userQuery = `query {
  user(login: "ryanspoone") {
    name
    login
    location
    avatarUrl
    email
    websiteUrl
    bio
    company
    followers {
      totalCount
    }
    following {
      totalCount
    }
    starredRepositories {
      totalCount
    }
    watching {
      totalCount
    }
    repositories(first: 100, privacy: PUBLIC, isFork: false, ownerAffiliations: OWNER) {
      totalCount
      edges {
        node {
          name
          stargazers {
            totalCount
          }
          forkCount
        }
      }
    }
  }
}`;

export const repositoriesQuery = `query {
  user(login: "ryanspoone") {
    repositories(first: 100, privacy: PUBLIC, isFork: false, ownerAffiliations: OWNER, orderBy: { field: UPDATED_AT, direction: DESC }) {
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

export const repoQuery = (repoName: string) => `query {
  repository(owner: "ryanspoone", name: "${repoName}") {
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
}`;
