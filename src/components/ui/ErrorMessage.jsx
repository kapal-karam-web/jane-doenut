function ErrorMessage({ message = "Terjadi kesalahan. Silakan coba lagi." }) {
  return (
    <p className="error-message" role="alert">
      {message}
    </p>
  );
}

export default ErrorMessage;