export default `query {
    user(login: "ryanspoone") {
      repository(name: "ryanspoone.com") {
        stargazers {
          totalCount
        }
        forkCount
      }
    }
}`;
