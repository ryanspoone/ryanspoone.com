import '@/styles/SocialSidebar.css';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import CodepenIcon from '@/components/icons/CodepenIcon';

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <ul className="social-list">
        <li>
          <a
            href="//github.com/ryanspoone"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="GitHub"
            className="social-item"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="//www.linkedin.com/in/ryanspoone"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="LinkedIn"
            className="social-item"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="//codepen.io/ryanspoone"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Codepen"
            className="social-item"
          >
            <CodepenIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
