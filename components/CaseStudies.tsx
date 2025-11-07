'use client';

import { useState } from 'react';
import '@/styles/FeaturedProjects.css';
import '@/styles/CaseStudies.css';
import { CASE_STUDIES } from '@/lib/caseStudies/data';

export default function CaseStudies() {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);

  const toggleStudy = (index: number) => {
    setExpandedStudy(expandedStudy === index ? null : index);
  };

  return (
    <div className="projects-grid case-studies-grid">
      <div className="projects-container">
        {CASE_STUDIES.map((study, index) => (
          <div key={index} className="project">
            <div className="project-inner">
              <header className="project-header">
                <div className="project-folder">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 60 60">
                    <path d="M53,11.5H23.535l-6.01-6.01C17.338,5.303,16.886,5,16.414,5H7c-1.103,0-2,0.897-2,2v46c0,1.103,0.897,2,2,2h46c1.103,0,2-0.897,2-2V13.5C55,12.397,54.103,11.5,53,11.5z"></path>
                  </svg>
                </div>
              </header>
              <h5 className="project-name">{study.title}</h5>
              <p className="project-description">{study.description}</p>
              {expandedStudy === index && study.details && (
                <div className="case-study-details">
                  <p><strong className="case-study-label">Context:</strong> {study.details.context}</p>
                  <p><strong className="case-study-label">Challenge:</strong> {study.details.challenge}</p>
                  <p><strong className="case-study-label">Approach:</strong></p>
                  <ul className="case-study-list">
                    {study.details.approach.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p><strong className="case-study-label">Results:</strong></p>
                  <ul className="case-study-list">
                    {study.details.results.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p><strong className="case-study-label">Key Learnings:</strong></p>
                  <ul className="case-study-list case-study-learnings">
                    {study.details.learnings.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={() => toggleStudy(index)}
                className="case-study-button"
              >
                {expandedStudy === index ? 'Show Less' : 'Read Full Case Study'}
              </button>
              <footer>
                <ul className="project-tech">
                  {study.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
