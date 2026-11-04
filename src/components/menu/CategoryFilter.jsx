function CategoryFilter({
  categories = [
    { id: "all", label: "Semua" },
    { id: "donut", label: "Donut" },
    { id: "bomboloni", label: "Bomboloni" },
    { id: "mochi", label: "Donat Mochi" },
    { id: "eclair", label: "Donat Eclair" },
  ],
  activeCategory,
  onSelectCategory,
}) {
  return (
    <nav
      className="menu-categories"
      aria-label="Filter kategori menu donat"
    >
      <div className="menu-categories__pill" role="tablist">
        {categories.map((cat) => {
          const isActive =
            activeCategory.toLowerCase() === cat.id.toLowerCase() ||
            (cat.id === "mochi" &&
              (activeCategory.toLowerCase() === "donat mochi" ||
                activeCategory.toLowerCase() === "mochi")) ||
            (cat.id === "eclair" &&
              (activeCategory.toLowerCase() === "donat eclair" ||
                activeCategory.toLowerCase() === "eclair"));

          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`menu-categories__tab ${isActive ? "menu-categories__tab--active" : ""
                }`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default CategoryFilter;
