import { Link } from "react-router-dom";

import SectionHeader from "../ui/SectionHeader";

function FeaturedMenu({ categories }) {
  return (
    <section className="featured-menu section">
      <div className="container">
        <SectionHeader
          eyebrow="Menu Pilihan"
          title="Temukan rasa untuk setiap suasana"
          description="Jelajahi berbagai kategori Jane Doenut dan pilih kreasi yang paling sesuai dengan seleramu."
          align="center"
        />

        <div className="featured-menu__grid">
          {categories.map((category) => (
            <article className="category-card" key={category.id}>
              <span className="category-card__icon" aria-hidden="true">
                {category.icon}
              </span>

              <h3>{category.name}</h3>
              <p>{category.description}</p>

              <Link
                className="category-card__link"
                to={`/menu?category=${encodeURIComponent(
                  category.name.toLowerCase(),
                )}`}
              >
                Lihat pilihan
                <span aria-hidden="true"> →</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="featured-menu__action">
          <Link className="button button--primary" to="/menu">
            Lihat Seluruh Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMenu;