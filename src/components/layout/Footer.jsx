import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <section className="site-footer__brand">
          <Link className="brand brand--footer" to="/">
            <span className="brand__icon" aria-hidden="true">
              JD
            </span>

            <span className="brand__text">
              <strong>Jane</strong>
              <span>Doenut</span>
            </span>
          </Link>

          <p>
            Donat lembut dengan beragam rasa untuk menemani waktu santai
            bersama orang tersayang.
          </p>
        </section>

        <nav className="site-footer__navigation" aria-label="Navigasi footer">
          <h2>Jelajahi</h2>

          <ul>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/promo">Promo</Link>
            </li>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </nav>

        <section className="site-footer__contact">
          <h2>Hubungi Kami</h2>

          <address>
            <p>Jl. Karya II No. 17, Karang Berombak, Medan</p>
            <p>
              <a href="tel:+62123456789999">+62 1234-5678-9999</a>
            </p>
            <p>
              <a href="mailto:hello@janedoenut.test">hello@janedoenut.test</a>
            </p>
          </address>
        </section>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            &copy; {currentYear} Jane Doenut. Dibuat oleh Kelompok Kapal Karam.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;