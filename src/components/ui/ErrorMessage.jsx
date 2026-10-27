function ErrorMessage({
  title = "Data tidak dapat ditampilkan",
  message = "Terjadi kesalahan saat mengambil data.",
  onRetry,
}) {
  return (
    <section className="error-state" role="alert">
      <span className="error-state__icon" aria-hidden="true">
        !
      </span>

      <div>
        <h2>{title}</h2>
        <p>{message}</p>

        {onRetry && (
          <button
            className="button button--primary"
            type="button"
            onClick={onRetry}
          >
            Coba Lagi
          </button>
        )}
      </div>
    </section>
  );
}

export default ErrorMessage;