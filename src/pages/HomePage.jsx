import { Link } from "react-router-dom";

import FeaturedMenu from "../components/home/FeaturedMenu";
import HeroSection from "../components/home/HeroSection";
import PromoPreview from "../components/home/PromoPreview";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import SectionHeader from "../components/ui/SectionHeader";
import useFetch from "../hooks/useFetch";
import "../styles/home.css";

function HomePage() {
  const {
    data: profile,
    isLoading,
    error,
    retry,
  } = useFetch("/data/profile.json");

  if (isLoading) {
    return (
      <div className="page-state container">
        <LoadingSpinner message="Menyiapkan halaman Jane Doenut..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-state container">
        <ErrorMessage
          message={error}
          onRetry={retry}
        />
      </div>
    );
  }

  return (
    <>
      <HeroSection profile={profile} />

      <section className="home-about section">
        <div className="container home-about__content">
          <div className="home-about__decoration" aria-hidden="true">
            <span>J</span>
            <span>D</span>
          </div>

          <div className="home-about__copy">
            <SectionHeader
              eyebrow="Tentang Jane Doenut"
              title="Dibuat untuk momen sederhana yang berkesan"
              description={profile.summary}
            />

            <Link className="text-link" to="/about">
              Kenali cerita kami
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedMenu categories={profile.featuredCategories} />

      <PromoPreview promo={profile.promoPreview} />

      <section className="home-cta section">
        <div className="container home-cta__content">
          <div>
            <p className="eyebrow">Kunjungi Kami</p>
            <h2>Siap menemukan donat favoritmu?</h2>
            <p>
              Lihat informasi lokasi, jam buka, dan cara menghubungi
              Jane Doenut.
            </p>
          </div>

          <Link className="button button--light" to="/location">
            Lihat Lokasi
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;