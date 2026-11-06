import { Link } from "react-router-dom";

function PromoCard({ image, alt, title, to, variant = "image" }) {
  const card = (
    <article className={`promo-card promo-card--${variant}`}>
      <div className="promo-card__image-wrap">
        <img className="promo-card__image" src={image} alt={alt} />
      </div>

      {title && (
        <div className="promo-card__content">
          <h2>{title}</h2>
          <span className="promo-card__action">Lihat promo</span>
        </div>
      )}
    </article>
  );

  if (to) {
    return (
      <Link className="promo-card__link" to={to}>
        {card}
      </Link>
    );
  }

  return card;
}

export default PromoCard;
