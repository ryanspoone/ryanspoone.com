import data from './data';

interface Position {
  title: string;
  summary: string;
  'start-date': string;
  'end-date': string;
  'is-current': boolean;
  company: string;
  'company-url': string;
}

interface SimplifiedPosition {
  title: string;
  summary: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  company: string;
  companyUrl: string;
}

const simplifyPositions = (positions: Position[]): SimplifiedPosition[] =>
  positions.map(position => ({
    title: position.title,
    summary: position.summary,
    startDate: position['start-date'],
    endDate: position['end-date'],
    isCurrent: position['is-current'],
    company: position.company,
    companyUrl: position['company-url']
  }));

export default function getPositions(): SimplifiedPosition[] {
  const currentPositions = data['three-current-positions'] || [];
  const pastPositions = data['three-past-positions'] || [];

  return [...simplifyPositions(currentPositions), ...simplifyPositions(pastPositions)];
}
