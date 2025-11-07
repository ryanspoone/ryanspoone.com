import '@/styles/FeaturedProjects.css';
import { prettifyTitle } from '@/lib/utils';
import ErrorMessage from './common/ErrorMessage';
import GitHubLink from './common/GitHubLink';
import ExternalLink from './common/ExternalLink';

interface Repo {
  name: string;
  url: string;
  homepageUrl?: string;
  description: string;
  repositoryTopics: string[];
}

interface FeaturedProjectsProps {
  data?: Repo[];
  isLoading?: boolean;
  error?: string;
  errorCode?: number;
}

export default function FeaturedProjects({ error, errorCode, data, isLoading }: FeaturedProjectsProps) {
  if (isLoading) {
    return (
      <div className="projects-grid loading">
        <div className="loading-content article">
          <div className="stripe long-stripe"></div>
          <div className="stripe long-stripe"></div>
          <div className="stripe long-stripe"></div>
        </div>
      </div>
    );
  } else if (data) {
    return (
      <div className="projects-grid">
        <div className="projects-container">
          {data.map((repo, index) => {
            return (
              <div tabIndex={0} key={index} className="project" data-sr-id={index}>
                <div className="project-inner">
                  <header>
                    <div className="project-header">
                      <div className="project-folder">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 60 60">
                          <title>Folder</title>
                          <path d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"></path>
                        </svg>
                      </div>
                      <div className="project-links">
                        <GitHubLink url={repo.url} />
                        <ExternalLink url={repo.homepageUrl} />
                      </div>
                    </div>
                    <h5 className="project-name">{prettifyTitle(repo.name)}</h5>
                    <div className="project-description">{repo.description}</div>
                  </header>
                  <footer>
                    <ul className="project-tech">
                      {repo.repositoryTopics.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </footer>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <ErrorMessage errorCode={errorCode} error={error} />;
  }
}
