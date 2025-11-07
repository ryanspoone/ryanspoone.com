import { render, screen, fireEvent } from '@testing-library/react';
import CaseStudies from '../CaseStudies';

describe('CaseStudies', () => {
  it('should render all case studies', () => {
    render(<CaseStudies />);

    expect(screen.getByText(/Scaling Engineering at Mediafly/i)).toBeInTheDocument();
    expect(screen.getByText(/60% Performance Improvement at InsightSquared/i)).toBeInTheDocument();
    expect(screen.getByText(/Open-Source Performance Benchmarking at Intel/i)).toBeInTheDocument();
  });

  it('should show "Read Full Case Study" button initially', () => {
    render(<CaseStudies />);

    const buttons = screen.getAllByText(/Read Full Case Study/i);
    expect(buttons).toHaveLength(3);
  });

  it('should expand case study when button is clicked', () => {
    render(<CaseStudies />);

    const buttons = screen.getAllByText(/Read Full Case Study/i);
    fireEvent.click(buttons[0]);

    expect(screen.getByText(/Show Less/i)).toBeInTheDocument();
    expect(screen.getByText(/Context:/i)).toBeInTheDocument();
    expect(screen.getByText(/Challenge:/i)).toBeInTheDocument();
  });

  it('should collapse case study when "Show Less" is clicked', () => {
    render(<CaseStudies />);

    const expandButton = screen.getAllByText(/Read Full Case Study/i)[0];
    fireEvent.click(expandButton);

    const collapseButton = screen.getByText(/Show Less/i);
    fireEvent.click(collapseButton);

    expect(screen.queryByText(/Context:/i)).not.toBeInTheDocument();
  });

  it('should only show one expanded case study at a time', () => {
    render(<CaseStudies />);

    const buttons = screen.getAllByText(/Read Full Case Study/i);

    fireEvent.click(buttons[0]);
    expect(screen.getByText(/Show Less/i)).toBeInTheDocument();

    fireEvent.click(buttons[1]);
    const showLessButtons = screen.getAllByText(/Show Less/i);
    expect(showLessButtons).toHaveLength(1);
  });
});
