'use client';

import '@/styles/Experience.css';
import ErrorMessage from './common/ErrorMessage';
import ExperiencePresentation from './Experience/ExperiencePresentation';
import { useMediaQuery, useTabbedContent } from '@/lib/hooks';
import { BREAKPOINTS } from '@/lib/constants';

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
  const tabbed = useTabbedContent(0);
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE})`);

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
  }

  if (data) {
    return (
      <ExperiencePresentation
        positions={data}
        selectedIndex={tabbed.selectedIndex}
        onSelectIndex={tabbed.selectIndex}
        isSelected={tabbed.isSelected}
        isMobile={isMobile}
      />
    );
  }

  return (
    <section id="experience" className="experience">
      <h3 className="heading">Where I&apos;ve Worked</h3>
      <ErrorMessage errorCode={errorCode} error={error} />
    </section>
  );
}
