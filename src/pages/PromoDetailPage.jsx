import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PromoCard from "../components/promo/PromoCard";
import "../styles/promo.css";

function PromoDetailPage() {
  const { slug } = useParams();
  const {
    data: promos,
    isLoading,
    error,
    retry,
  } = useFetch("/data/promos.json");

  if (isLoading) {
    return (
      <section className="promo-status container">
        <LoadingSpinner message="Memuat detail promo..." />
      </section>
    );
  }

  if (error) {
    return (
      <section className="promo-status container">
        <ErrorMessage message={error} onRetry={retry} />
      </section>
    );
  }

  const promo = promos?.find((item) => item.slug === slug);

  if (!promo) {
    return (
      <section className="promo-status container">
        <ErrorMessage
          title="Promo tidak ditemukan"
          message="Promo yang kamu cari belum tersedia."
        />
        <Link className="button button--primary" to="/promo">
          Kembali ke promo
        </Link>
      </section>
    );
  }

  return (
    <article className="promo-detail">
      <section className="promo-hero">
        <img src={promo.heroImage} alt={promo.heroAlt} />
        <div className="promo-hero__overlay" aria-hidden="true" />
        <h1>{promo.title}</h1>
      </section>

      <section
        className="container promo-gallery"
        aria-labelledby="promo-gallery-title"
      >
        <h2 id="promo-gallery-title" className="sr-only">
          Daftar promo {promo.title}
        </h2>

        <div className="promo-gallery__grid">
          {promo.items.map((item) => (
            <PromoCard key={item.id} image={item.image} alt={item.alt} />
          ))}
        </div>

        <Link className="promo-detail__back" to="/promo">
          ← Lihat semua promo
        </Link>
      </section>
    </article>
  );
}

export default PromoDetailPage;
