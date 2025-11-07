import GitHubIcon from '@/components/icons/GitHubIcon';

interface GitHubLinkProps {
  url?: string;
}

export default function GitHubLink({ url }: GitHubLinkProps) {
  if (!url) {
    return <span></span>;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="GitHub Link"
      className="project-link"
    >
      <GitHubIcon />
    </a>
  );
}
