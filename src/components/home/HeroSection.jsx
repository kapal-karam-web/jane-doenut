import { Link } from "react-router-dom";

function HeroSection({ profile }) {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__copy">
          <p className="eyebrow">{profile.tagline}</p>

          <h1>{profile.heroTitle}</h1>

          <p className="hero__description">
            {profile.heroDescription}
          </p>

          <div className="hero__actions">
            <Link className="button button--primary" to="/menu">
              Lihat Menu
            </Link>

            <Link className="button button--secondary" to="/about">
              Cerita Kami
            </Link>
          </div>

          <ul className="hero__benefits" aria-label="Keunggulan Jane Doenut">
            <li>
              <span aria-hidden="true">✓</span>
              Pilihan rasa beragam
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              Cocok untuk berbagai momen
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              Harga terjangkau
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              src={profile.heroImage}
              alt={profile.heroImageAlt}
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget
                  .closest(".hero__image-frame")
                  ?.classList.add("hero__image-frame--fallback");
              }}
            />

            <div className="hero__image-fallback" aria-hidden="true">
              <span>🍩</span>
              <span>Jane Doenut</span>
            </div>
          </div>

          <div className="hero__badge">
            <strong>4</strong>
            <span>Kategori pilihan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;