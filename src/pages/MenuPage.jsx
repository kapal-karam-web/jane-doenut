import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import CategoryFilter from "../components/menu/CategoryFilter";
import MenuHero from "../components/menu/MenuHero";
import ProductCard from "../components/menu/ProductCard";
import SearchBar from "../components/menu/SearchBar";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useFetch from "../hooks/useFetch";
import "../styles/menu.css";

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "donut", label: "Donut" },
  { id: "bomboloni", label: "Bomboloni" },
  { id: "mochi", label: "Donat Mochi" },
  { id: "eclair", label: "Donat Eclair" },
];

function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "donut";
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: products,
    isLoading,
    error,
    retry,
  } = useFetch("/data/products.json");

  // Handle category change and sync with URL search params
  const handleSelectCategory = (categoryId) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      newParams.set("category", "all");
    } else {
      newParams.set("category", categoryId);
    }
    setSearchParams(newParams);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", "donut");
    setSearchParams(newParams);
  };

  // Helper function to match category
  const matchesCategory = (product, activeCat) => {
    if (!activeCat || activeCat === "all") return true;

    const lowerActive = activeCat.toLowerCase().trim();
    const prodSlug = (product.categorySlug || "").toLowerCase();
    const prodCat = (product.category || "").toLowerCase();

    if (lowerActive === "mochi" || lowerActive === "donat mochi") {
      return prodSlug === "mochi" || prodCat.includes("mochi");
    }

    if (lowerActive === "eclair" || lowerActive === "donat eclair") {
      return prodSlug === "eclair" || prodCat.includes("eclair");
    }

    return prodSlug === lowerActive || prodCat.includes(lowerActive);
  };

  // Filtered products based on search query and category
  const filteredProducts = useMemo(() => {
    if (!products) return [];

    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      // If user is searching, optionally search across all or within category
      const matchSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        (product.description &&
          product.description.toLowerCase().includes(query));

      const matchCat = matchesCategory(product, categoryParam);

      // If user typed a search query, show results across all categories
      // unless they are explicitly filtering a category
      if (query && categoryParam === "all") {
        return matchSearch;
      }

      return matchCat && matchSearch;
    });
  }, [products, categoryParam, searchQuery]);

  // Determine section title based on active category / search state
  const getSectionTitle = () => {
    if (searchQuery.trim()) {
      return `Hasil Pencarian: "${searchQuery}"`;
    }

    const current = CATEGORIES.find(
      (c) =>
        c.id.toLowerCase() === categoryParam.toLowerCase() ||
        (c.id === "mochi" &&
          (categoryParam.toLowerCase() === "donat mochi" ||
            categoryParam.toLowerCase() === "mochi")) ||
        (c.id === "eclair" &&
          (categoryParam.toLowerCase() === "donat eclair" ||
            categoryParam.toLowerCase() === "eclair")),
    );

    return current ? current.label : "Menu Jane Doenut";
  };

  if (isLoading) {
    return (
      <div className="page-state container" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <LoadingSpinner message="Menyiapkan daftar menu lezat Jane Doenut..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-state container" style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: "4rem 1rem" }}>
        <ErrorMessage
          title="Gagal Memuat Menu"
          message={error}
          onRetry={retry}
        />
      </div>
    );
  }

  return (
    <main className="menu-page">
      {/* Top Banner Hero with Donuts image and 'Menu' text */}
      <MenuHero
        title="Menu"
        image="/images/common/menu-banner.webp"
        alt="Barisan bomboloni emas Jane Doenut bertabur gula halus di atas papan kayu"
      />

      {/* Filter and Search Controls */}
      <section className="menu-controls" aria-label="Navigasi dan Pencarian Menu">
        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={categoryParam}
          onSelectCategory={handleSelectCategory}
        />

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={handleClearSearch}
          placeholder="Cari donat, bomboloni, rasa favorit..."
        />
      </section>

      {/* Menu Products Content */}
      <section className="menu-content" aria-label="Daftar Produk">
        <header className="menu-section-header">
          <h2 className="menu-section__title">{getSectionTitle()}</h2>
          {searchQuery.trim() && (
            <div className="menu-search-info">
              <span>
                Ditemukan {filteredProducts.length} produk untuk &ldquo;{searchQuery}&rdquo;
              </span>
              <button type="button" onClick={handleClearSearch}>
                Hapus pencarian
              </button>
            </div>
          )}
        </header>

        {filteredProducts.length === 0 ? (
          <div className="menu-empty" role="status" aria-live="polite">
            <span className="menu-empty__icon" aria-hidden="true">
              🍩
            </span>
            <h3>Menu Tidak Ditemukan</h3>
            <p>
              Maaf, tidak ada varian donat yang sesuai dengan kata kunci
              {searchQuery ? ` "${searchQuery}"` : ""} pada kategori ini. Coba kata kunci lain atau reset filter.
            </p>
            <button
              type="button"
              className="button button--primary"
              onClick={handleResetFilters}
            >
              Reset Filter & Pencarian
            </button>
          </div>
        ) : (
          <div className="menu-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default MenuPage;