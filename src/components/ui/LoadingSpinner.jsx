function LoadingSpinner({ message = "Memuat data..." }) {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <span className="loading-state__spinner" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}

export default LoadingSpinner;