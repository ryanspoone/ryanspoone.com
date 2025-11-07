import githubGraphQL from './client';
import { featuredQuery, userQuery, repositoriesQuery, repoQuery } from './queries';

export interface Repository {
  name: string;
  url: string;
  isTemplate: boolean;
  description: string;
  language: string;
  forkCount: number;
  starCount: number;
  updatedAt: string;
  createdAt: string;
  issueCount: number;
  pullRequestCount: number;
  repositoryTopics: string[];
  homepageUrl: string | null;
}

export interface UserStats {
  name: string;
  login: string;
  location: string | null;
  avatarUrl: string;
  email: string | null;
  websiteUrl: string | null;
  bio: string | null;
  company: string | null;
  followers: number;
  following: number;
  stars: number;
  watching: number;
  repos: number;
  totalStars: number;
  totalForks: number;
}

const simplifyRepo = (repo: any): Repository => ({
  name: repo.name,
  url: repo.url,
  isTemplate: repo.isTemplate,
  description: repo.shortDescriptionHTML,
  language: repo.primaryLanguage?.name || '',
  forkCount: repo.forkCount,
  starCount: repo.stargazers?.totalCount || 0,
  updatedAt: repo.updatedAt,
  createdAt: repo.createdAt,
  issueCount: repo.issues?.totalCount || 0,
  pullRequestCount: repo.pullRequests?.totalCount || 0,
  repositoryTopics: repo.repositoryTopics?.edges?.map((topic: any) => topic.node.topic.name) || [],
  homepageUrl: repo.homepageUrl
});

export async function getFeatured(): Promise<Repository[]> {
  const response = await githubGraphQL(featuredQuery);
  const featuredRepos = response.data?.user?.pinnedItems?.edges || [];
  return featuredRepos.map((edge: any) => simplifyRepo(edge.node));
}

export async function getUserStats(): Promise<UserStats> {
  const response = await githubGraphQL(userQuery);
  const user = response.data?.user;

  if (!user) {
    throw new Error('User data not found');
  }

  const repos = user.repositories?.edges || [];
  const totalStars = repos.reduce((sum: number, edge: any) => sum + (edge.node.stargazers?.totalCount || 0), 0);
  const totalForks = repos.reduce((sum: number, edge: any) => sum + (edge.node.forkCount || 0), 0);

  return {
    name: user.name,
    login: user.login,
    location: user.location,
    avatarUrl: user.avatarUrl,
    email: user.email,
    websiteUrl: user.websiteUrl,
    bio: user.bio,
    company: user.company,
    followers: user.followers?.totalCount || 0,
    following: user.following?.totalCount || 0,
    stars: user.starredRepositories?.totalCount || 0,
    watching: user.watching?.totalCount || 0,
    repos: user.repositories?.totalCount || 0,
    totalStars,
    totalForks
  };
}

export async function getRepositories(): Promise<Repository[]> {
  const response = await githubGraphQL(repositoriesQuery);
  const repos = response.data?.user?.repositories?.edges || [];
  return repos.map((edge: any) => simplifyRepo(edge.node));
}

export async function getRepoStats(params: { repo?: string }): Promise<Repository | null> {
  if (!params.repo) {
    return null;
  }

  const response = await githubGraphQL(repoQuery(params.repo));
  const repo = response.data?.repository;

  if (!repo) {
    return null;
  }

  return simplifyRepo(repo);
}
