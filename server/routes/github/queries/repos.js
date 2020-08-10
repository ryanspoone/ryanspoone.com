export default `query {
    user(login: "ryanspoone") {
      repositories(first: 50) {
        totalCount
        edges {
          node {
            name
            url
            shortDescriptionHTML
            forkCount
            stargazers {
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
            isPrivate
            homepageUrl
          }
        }
      }
    }
}`;
