import Intro from '@/components/Intro';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import '@/styles/Home.css';
import getPositions from '@/lib/linkedin/getPositions';
import { getFeatured } from '@/lib/github/helpers';

async function getLinkedInJobs() {
  try {
    const data = getPositions();
    return { data, isLoading: false };
  } catch (error) {
    return { data: undefined, isLoading: false, error: error instanceof Error ? error.message : 'Unknown error', errorCode: 500 };
  }
}

async function getFeaturedRepos() {
  try {
    const data = await getFeatured();
    return { data, isLoading: false };
  } catch (error) {
    return { data: undefined, isLoading: false, error: error instanceof Error ? error.message : 'Unknown error', errorCode: 500 };
  }
}

export default async function Home() {
  const [linkedinData, githubFeatured] = await Promise.all([
    getLinkedInJobs(),
    getFeaturedRepos()
  ]);

  return (
    <main role="main" className="main fill-height">
      <Intro />
      <About />
      <Experience
        data={linkedinData.data}
        error={linkedinData.error}
        errorCode={linkedinData.errorCode}
        isLoading={linkedinData.isLoading}
      />
      <Projects
        githubFeatured={githubFeatured}
      />
      <Contact />
    </main>
  );
}
