'use client';

import { useState, useEffect } from 'react';
import '@/styles/Experience.css';
import ErrorMessage from './common/ErrorMessage';

interface Position {
  title: string;
  summary: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  company: string;
  companyUrl: string;
}

interface ExperienceProps {
  data?: Position[];
  isLoading?: boolean;
  error?: string;
  errorCode?: number;
}

export default function Experience({ error, errorCode, data, isLoading }: ExperienceProps) {
  const [selectedPosition, setSelectedPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 37.5em)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 37.5em)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (isLoading) {
    return (
      <section id="experience" className="experience">
        <h3 className="heading">Where I&apos;ve Worked</h3>
        <div className="loading">
          <div className="loading-content article">
            <div className="stripe medium-stripe"></div>
            <div className="stripe small-stripe"></div>
            <div className="stripe long-stripe"></div>
            <div className="stripe medium-stripe"></div>
            <div className="stripe long-stripe"></div>
          </div>
        </div>
      </section>
    );
  } else if (data) {
    return (
      <section id="experience" className="experience">
        <h3 className="heading">Where I&apos;ve Led and Achieved</h3>
        <div className="jobs">
          <ul role="tablist" aria-label="Job tabs" className="job-tabs">
            {data.map((position, index) => {
              const isSelected = selectedPosition === index;

              return (
                <li key={index}>
                  <button
                    id={`tab-${index}`}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`panel-${index}`}
                    tabIndex={isSelected ? 0 : -1}
                    className={`job-tab ${isSelected ? 'active' : ''}`}
                    onClick={event => {
                      event.preventDefault();
                      setSelectedPosition(index);
                    }}
                  >
                    <span>
                      {position.title} @ {position.company}
                    </span>
                  </button>
                </li>
              );
            })}
            <span
              className="job-highlight"
              style={{
                transform: isMobile
                  ? `translateX(${180 * selectedPosition}px)`
                  : `translateY(${42 * selectedPosition}px)`
              }}
            ></span>
          </ul>

          {data.map((position, index) => {
            const isSelected = selectedPosition === index;

            return (
              <div
                key={index}
                id={`panel-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
                tabIndex={isSelected ? 0 : -1}
                hidden={!isSelected}
                className="job-info"
              >
                <h4 className="job-title">
                  <span>{position.title}</span>
                  <span className="job-company">
                    <span>&nbsp;@&nbsp;</span>
                    <a
                      href={position.companyUrl}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {position.company}
                    </a>
                  </span>
                </h4>
                <h5 className="job-timeframe">
                  <span>
                    {position.startDate} -{' '}
                    {position.isCurrent ? 'Present' : position.endDate}
                  </span>
                </h5>
                <div
                  className="job-summary"
                  dangerouslySetInnerHTML={{ __html: position.summary }}
                ></div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section id="experience" className="experience">
        <h3 className="heading">Where I&apos;ve Worked</h3>
        <ErrorMessage errorCode={errorCode} error={error} />
      </section>
    );
  }
}
