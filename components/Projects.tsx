import Link from 'next/link';
import '@/styles/Projects.css';
import CaseStudies from './CaseStudies';
import FeaturedProjects from './FeaturedProjects';
import { Repository } from '@/lib/github/helpers';

interface ProjectsProps {
  githubFeatured?: {
    data?: Repository[];
    isLoading?: boolean;
    error?: string;
    errorCode?: number;
  };
}

export default function Projects({ githubFeatured }: ProjectsProps) {
  return (
    <section id="projects" className="projects">
      <h3 className="heading">Featured Work</h3>
      <h4 className="case-studies-title">Case Studies</h4>
      <p className="case-studies-intro">
        These case studies represent some of my most impactful work across different contexts—scaling data infrastructure at a 200-person company, optimizing system architecture at a growth-stage startup, and building open-source tools at Intel.
      </p>
      <CaseStudies />

      <h4 className="open-source-title">Open Source & Side Projects</h4>
      <FeaturedProjects
        data={githubFeatured?.data}
        error={githubFeatured?.error}
        errorCode={githubFeatured?.errorCode}
        isLoading={githubFeatured?.isLoading}
      />
      <Link href="/archive" className="archive-link">
        view the archive
      </Link>
    </section>
  );
}
