// @FIXME
import featured from './featured.json';

// query {
//     user(login: "ryanspoone") {
//       pinnedItems(first: 10) {
//         totalCount
//         pageInfo {
//           hasNextPage
//         }
//         edges {
//           node {
//             ... on Repository {
//               name
//               url
//               isTemplate
//               shortDescriptionHTML
//               primaryLanguage {
//                 name
//               }
//               forkCount
//               updatedAt
//               isPrivate
//               homepageUrl
//               stargazers {
//                 totalCount
//               }
//               issues {
//                 totalCount
//               }
//               pullRequests {
//                 totalCount
//               }
//               repositoryTopics(first: 3) {
//                 edges {
//                   node {
//                     topic {
//                       name
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
// }
export default async function getFeatured() {
    return await Promise.resolve(featured);
}
