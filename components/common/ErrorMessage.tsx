interface ErrorMessageProps {
  errorCode?: number;
  error?: string;
}

export default function ErrorMessage({ errorCode, error }: ErrorMessageProps) {
  return (
    <div className="section-error">
      <h2>Oh no! Something went wrong...</h2>
      <h4>{errorCode}</h4>
      <code>{error || 'Unknown error occurred.'}</code>
    </div>
  );
}
