import { Link, useRouteError } from "react-router-dom";

function NotFoundPage() {
  const error = useRouteError();

  return (
    <main className="error-page">
      <div className="container error-page__content">
        <p className="error-page__code">
          {error?.status || "404"}
        </p>

        <h1>Halaman tidak ditemukan</h1>

        <p>
          Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>

        <Link className="button button--primary" to="/">
          Kembali ke Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;