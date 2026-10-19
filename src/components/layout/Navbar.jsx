import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    label: "Home",
    path: "/",
    end: true,
  },
  {
    label: "Menu",
    path: "/menu",
  },
  {
    label: "Promo",
    path: "/promo",
  },
  {
    label: "Our Story",
    path: "/about",
  },
  {
    label: "Location",
    path: "/location",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navigasi utama">
        <NavLink
          className="brand"
          to="/"
          aria-label="Jane Doenut, kembali ke halaman utama"
          onClick={closeMenu}
        >
          <span className="brand__icon" aria-hidden="true">
            JD
          </span>

          <span className="brand__text">
            <strong>Jane</strong>
            <span>Doenut</span>
          </span>
        </NavLink>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}
          id="primary-navigation"
        >
          <ul className="navbar__links">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__link navbar__link--active"
                      : "navbar__link"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            className="button button--primary navbar__order-button"
            to="/contact"
            onClick={closeMenu}
          >
            Pesan Sekarang
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;