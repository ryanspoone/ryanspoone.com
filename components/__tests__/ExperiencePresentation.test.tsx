import { render, screen, fireEvent } from '@testing-library/react';
import ExperiencePresentation from '../Experience/ExperiencePresentation';

const mockPositions = [
  {
    title: 'Software Engineer',
    summary: '<ul><li>Built features</li></ul>',
    startDate: 'Jan 2020',
    endDate: 'Dec 2021',
    isCurrent: false,
    company: 'Tech Corp',
    companyUrl: 'https://techcorp.com',
  },
  {
    title: 'Senior Engineer',
    summary: '<ul><li>Led team</li></ul>',
    startDate: 'Jan 2022',
    endDate: '',
    isCurrent: true,
    company: 'Big Tech',
    companyUrl: 'https://bigtech.com',
  },
];

describe('ExperiencePresentation', () => {
  const mockIsSelected = jest.fn((index: number) => index === 0);
  const mockOnSelectIndex = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all position tabs', () => {
    render(
      <ExperiencePresentation
        positions={mockPositions}
        selectedIndex={0}
        onSelectIndex={mockOnSelectIndex}
        isSelected={mockIsSelected}
        isMobile={false}
      />
    );

    expect(screen.getByText(/Software Engineer @ Tech Corp/i)).toBeInTheDocument();
    expect(screen.getByText(/Senior Engineer @ Big Tech/i)).toBeInTheDocument();
  });

  it('should call onSelectIndex when tab is clicked', () => {
    render(
      <ExperiencePresentation
        positions={mockPositions}
        selectedIndex={0}
        onSelectIndex={mockOnSelectIndex}
        isSelected={mockIsSelected}
        isMobile={false}
      />
    );

    const tabs = screen.getAllByRole('tab');
    fireEvent.click(tabs[1]);

    expect(mockOnSelectIndex).toHaveBeenCalledWith(1);
  });

  it('should show "Present" for current position', () => {
    render(
      <ExperiencePresentation
        positions={mockPositions}
        selectedIndex={0}
        onSelectIndex={mockOnSelectIndex}
        isSelected={mockIsSelected}
        isMobile={false}
      />
    );

    expect(screen.getByText(/Present/i)).toBeInTheDocument();
  });

  it('should apply correct transform for desktop layout', () => {
    render(
      <ExperiencePresentation
        positions={mockPositions}
        selectedIndex={1}
        onSelectIndex={mockOnSelectIndex}
        isSelected={mockIsSelected}
        isMobile={false}
      />
    );

    const highlight = document.querySelector('.job-highlight');
    expect(highlight).toHaveStyle({ transform: 'translateY(42px)' });
  });

  it('should apply correct transform for mobile layout', () => {
    render(
      <ExperiencePresentation
        positions={mockPositions}
        selectedIndex={1}
        onSelectIndex={mockOnSelectIndex}
        isSelected={mockIsSelected}
        isMobile={true}
      />
    );

    const highlight = document.querySelector('.job-highlight');
    expect(highlight).toHaveStyle({ transform: 'translateX(180px)' });
  });
});
