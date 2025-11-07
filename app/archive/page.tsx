import Link from 'next/link';
import { prettifyTitle } from '@/lib/utils';
import GitHubLink from '@/components/common/GitHubLink';
import ExternalLink from '@/components/common/ExternalLink';
import '@/styles/Archive.css';
import { getRepositories, Repository } from '@/lib/github/helpers';

// Revalidate every hour
export const revalidate = 3600;

export default async function Archive() {
  let repos: Repository[] = [];
  try {
    repos = await getRepositories();
  } catch (error) {
    console.error('Failed to fetch repositories:', error);
  }

  return (
    <main className="archive">
      <header>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818">
            <title>Arrow</title>
            <g>
              <path d="M192.991,133.253L69.755,10.017c-2.437-2.438-6.39-2.438-8.829,0c-2.437,2.438-2.437,6.39,0,8.829l120.398,120.398L60.926,259.641c-2.437,2.438-2.437,6.39,0,8.829c1.218,1.219,2.815,1.829,4.414,1.829c1.599,0,3.196-0.61,4.414-1.829l123.236-123.236C195.428,142.795,195.428,135.691,192.991,133.253z" transform="rotate(180 97.409 139.424)"></path>
            </g>
          </svg>
        </Link>
        <h1 className="big-title">Archive</h1>
        <p className="subtitle">A big list of things I&apos;ve worked on</p>
      </header>
      <div className="archive-container">
        <table className="archive-table">
          <thead>
            <tr>
              <th className="hide-on-mobile">Year</th>
              <th>Title</th>
              <th className="hide-on-mobile">Built with</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo: Repository, index: number) => (
              <tr key={index}>
                <td className="year hide-on-mobile">{new Date(repo.createdAt).getFullYear()}</td>
                <td className="title">{prettifyTitle(repo.name)}</td>
                <td className="tech hide-on-mobile">{repo.language || 'N/A'}</td>
                <td className="links">
                  <span>
                    <GitHubLink url={repo.url} />
                    <ExternalLink url={repo.homepageUrl} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
