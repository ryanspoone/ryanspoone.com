import '@/styles/About.css';
import BulletList from './ui/BulletList';

export default function About() {
  return (
    <section id="about" className="about">
      <h3 className="heading">About Me</h3>
      <div className="about-flex-container">
        <div className="about-content">
          <div>
            <p>
              I&apos;ve always been drawn to the invisible problems—the ones that only reveal themselves at scale. How do you process a billion data points without infrastructure costs spiraling? How do you double team capacity without sacrificing quality? How do you build systems that adapt to changing needs without complete rewrites?
            </p>
            <p>
              These are the problems that get me up in the morning.
            </p>

            <h4>Career Journey</h4>

            <p><strong className="career-title">Intel Corporation (2014-2017): Building the Foundation</strong></p>
            <p>
              I started my career at Intel as a Performance Engineer in the Data Center Group, where I fell in love with systems programming and performance optimization. I spent three years building benchmarking tools, analyzing CPU performance characteristics, and developing internal applications for performance comparison.
            </p>
            <p>
              The work taught me to think at multiple levels of abstraction—from instruction-level optimization to system architecture to user experience. I built an open-source performance testing suite that&apos;s still used across the company today, and received two Intel Division Recognition Awards for my contributions.
            </p>
            <p className="career-description">
              Key lesson: The best technical work combines deep expertise with clear communication. Engineers need tools that work, and stakeholders need to understand why it matters.
            </p>

            <p className="career-section"><strong className="career-title">Olono to InsightSquared to Mediafly (2018-2024): Scaling Through Acquisitions</strong></p>
            <p>
              I joined Olono, a pre-Series A startup, as their first dedicated backend engineer. Within 18 months, we were acquired by InsightSquared. Two years later, InsightSquared was acquired by Mediafly. I rode the journey from 10-person startup to 200+ person organization, progressing from Software Engineer to Director of Engineering.
            </p>
            <p>This trajectory taught me how to build systems and teams that survive rapid growth:</p>
            <BulletList
              items={[
                'As a Software Engineer, I built the integration framework that connected our platform to Salesforce, Zendesk, Jira, and other services—contributing to 300% customer growth',
                'As a Senior/Principal Engineer, I architected ETL systems that increased data processing efficiency by 60%, enabling us to scale to 500% more customers without proportional infrastructure costs',
                'As an Engineering Manager, I built Mediafly\'s first nearshore team and created onboarding programs that reduced ramp-up time by 50%',
                'As a Director of Engineering, I led teams of 10 engineers delivering strategic projects contributing $4M ARR while implementing Agile frameworks that improved delivery predictability by 90%'
              ]}
              ariaLabel="Career accomplishments"
            />
            <p className="career-description">
              Key lesson: Scaling isn&apos;t just about adding more people. It&apos;s about building systems, processes, and culture that amplify everyone&apos;s impact.
            </p>

            <p className="career-section"><strong className="career-title">Ouroborai (2024-Present): Building from Zero Again</strong></p>
            <p>
              After years of scaling existing products, I wanted to return to the 0-to-1 phase. I founded Ouroborai to build AI-powered tools that help non-technical founders create enterprise-grade applications without writing code.
            </p>
            <p>
              The hypothesis: template-first development + AI assistance can deliver products 3-5x faster at 70% lower cost than traditional development, without sacrificing quality.
            </p>
            <p>
              I&apos;m in the early exploration phase—building, testing, learning. Whether this becomes my next decade or provides lessons for my next leadership role, I&apos;m energized by the challenge of making software development more accessible.
            </p>
            <p className="career-description">
              Key lesson (so far): Building alone after leading teams makes you appreciate everything a great team provides. Also, I miss mentoring engineers.
            </p>

            <h4>What I Care About</h4>
            <BulletList
              items={[
                <><strong>Technical Excellence with Business Impact:</strong> I believe the best engineering delivers measurable business value. Code quality matters, but what matters more is whether customers can do things they couldn&apos;t do before.</>,
                <><strong>Building Teams That Scale:</strong> The most satisfying part of engineering leadership is watching people grow. Engineers I mentored have gone on to lead teams, architect major systems, and start their own companies.</>,
                <><strong>Making Software Development More Accessible:</strong> Whether through better tools, clearer documentation, or AI assistance—I&apos;m passionate about lowering barriers to building great software.</>
              ]}
              ariaLabel="Core values"
            />

            <h4>Technologies & Methodologies</h4>
            <BulletList
              items={[
                'Python',
                'JavaScript (Node.js)',
                'React',
                'Distributed Systems',
                'ETL & Data Pipelines',
                'AWS & Azure',
                'Microservices Architecture',
                'Agile & Scrum',
                'Team Scaling',
                'AI/ML Integration'
              ]}
              columns={2}
              ariaLabel="Technologies and methodologies"
            />

            <h4>Outside of Work</h4>
            <BulletList
              items={[
                'Amateur Radio Operator (FCC Technician License)',
                'StrongLifts 5x5 (currently working toward the 200lb milestone)',
                'Gaming (World of Warcraft, Baldur\'s Gate 3, strategy games)',
                'Reading (sci-fi, technical deep-dives, and leadership books)'
              ]}
              ariaLabel="Personal interests"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
