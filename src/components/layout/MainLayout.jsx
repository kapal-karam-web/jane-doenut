import { Outlet, ScrollRestoration } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className="site-wrapper">
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
}

export default MainLayout;