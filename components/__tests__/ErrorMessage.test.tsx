import { render, screen } from '@testing-library/react';
import ErrorMessage from '../common/ErrorMessage';

describe('ErrorMessage', () => {
  it('should render error message with code', () => {
    render(<ErrorMessage errorCode={404} error="Not found" />);

    expect(screen.getByText(/Oh no! Something went wrong.../i)).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Not found')).toBeInTheDocument();
  });

  it('should render without error code', () => {
    render(<ErrorMessage error="Something went wrong" />);

    expect(screen.getByText(/Oh no! Something went wrong.../i)).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('should show default error message when no error prop provided', () => {
    render(<ErrorMessage />);

    expect(screen.getByText(/Unknown error occurred./i)).toBeInTheDocument();
  });
});
