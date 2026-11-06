import useFetch from "../hooks/useFetch";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import PromoCard from "../components/promo/PromoCard";
import "../styles/promo.css";

function PromoPage() {
  const {
    data: promos,
    isLoading,
    error,
    retry,
  } = useFetch("/data/promos.json");

  if (isLoading) {
    return (
      <section className="container">
        <LoadingSpinner message="Memuat promo..." />
      </section>
    );
  }

  if (error) {
    return (
      <section className="container">
        <ErrorMessage message={error} onRetry={retry} />
      </section>
    );
  }

  if (!promos || promos.length === 0) {
    return (
      <section className="promo-status container">
        <h1>Belum ada promo</h1>
        <p>Promo baru akan segera hadir.</p>
      </section>
    );
  }

  return (
    <section className="promo-list-page">
      <div className="container promo-list-page__content">
        <div className="promo-list-page__intro">
          <p className="eyebrow">Promo spesial</p>
          <h1>Paket untuk setiap momen</h1>
          <p>
            Temukan paket donat pilihan untuk menemani momen spesialmu.
          </p>
        </div>

        <div className="promo-category-grid">
          {promos.map((promo) => (
            <PromoCard
              key={promo.slug}
              image={promo.heroImage}
              alt={promo.heroAlt}
              title={promo.title}
              to={`/promo/${promo.slug}`}
              variant="category"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoPage;
