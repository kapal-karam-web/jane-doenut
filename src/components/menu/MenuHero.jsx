function MenuHero({
  title = "Menu",
  image = "/images/common/menu-banner.webp",
  alt = "Koleksi donat empuk Jane Doenut dengan aneka isian lezat",
}) {
  return (
    <header className="menu-hero">
      <div className="menu-hero__container">
        <div className="menu-hero__card">
          <img
            src={image}
            alt={alt}
            className="menu-hero__image"
          />
          <div className="menu-hero__overlay">
            <h1 className="menu-hero__title">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MenuHero;
