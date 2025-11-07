interface Position {
  title: string;
  summary: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  company: string;
  companyUrl: string;
}

interface ExperiencePresentationProps {
  positions: Position[];
  selectedIndex: number;
  onSelectIndex: (index: number) => void;
  isSelected: (index: number) => boolean;
  isMobile: boolean;
}

export default function ExperiencePresentation({
  positions,
  selectedIndex,
  onSelectIndex,
  isSelected,
  isMobile,
}: ExperiencePresentationProps) {
  return (
    <section id="experience" className="experience">
      <h3 className="heading">Where I&apos;ve Led and Achieved</h3>
      <div className="jobs">
        <ul role="tablist" aria-label="Job tabs" className="job-tabs">
          {positions.map((position, index) => {
            const selected = isSelected(index);

            return (
              <li key={index}>
                <button
                  id={`tab-${index}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${index}`}
                  tabIndex={selected ? 0 : -1}
                  className={`job-tab ${selected ? 'active' : ''}`}
                  onClick={event => {
                    event.preventDefault();
                    onSelectIndex(index);
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
                ? `translateX(${180 * selectedIndex}px)`
                : `translateY(${42 * selectedIndex}px)`
            }}
          ></span>
        </ul>

        {positions.map((position, index) => {
          const selected = isSelected(index);

          return (
            <div
              key={index}
              id={`panel-${index}`}
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
              tabIndex={selected ? 0 : -1}
              hidden={!selected}
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
}
