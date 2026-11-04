function ProductCard({ product, className = "" }) {
  if (!product) return null;

  const {
    name,
    description,
    priceDisplay,
    price,
    image,
    alt,
    category,
  } = product;

  // Format price if priceDisplay isn't provided
  const displayPrice =
    priceDisplay || (price ? `Rp ${price.toLocaleString("id-ID")}` : "");

  return (
    <article
      className={`product-card ${className}`.trim()}
      aria-label={`${name}, ${displayPrice}`}
    >
      <div className="product-card__thumb">
        <img
          src={image}
          alt={alt || name}
          loading="lazy"
          className="product-card__image"
          onError={(e) => {
            // Fallback if image fails to load
            e.currentTarget.src = "/images/common/menu-banner.webp";
          }}
        />
      </div>

      <div className="product-card__content">
        <div className="product-card__header">
          <h3 className="product-card__title">{name}</h3>
          <span className="product-card__leader" aria-hidden="true" />
          <span className="product-card__price">{displayPrice}</span>
        </div>

        {description && (
          <p className="product-card__desc">{description}</p>
        )}

        {category && (
          <span className="sr-only">Kategori: {category}</span>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
