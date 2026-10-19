import { Link } from "react-router-dom";

function PromoPreview({ promo }) {
  return (
    <section className="promo-preview section">
      <div className="container promo-preview__content">
        <div className="promo-preview__visual" aria-hidden="true">
          <span className="promo-preview__donut">🍩</span>
          <span className="promo-preview__spark promo-preview__spark--one">
            ✦
          </span>
          <span className="promo-preview__spark promo-preview__spark--two">
            ✦
          </span>
        </div>

        <div className="promo-preview__copy">
          <p className="eyebrow">{promo.eyebrow}</p>
          <h2>{promo.title}</h2>
          <p>{promo.description}</p>

          <Link className="button button--primary" to="/promo">
            {promo.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PromoPreview;