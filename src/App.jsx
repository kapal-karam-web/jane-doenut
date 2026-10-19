import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import MenuPage from "./pages/MenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import PromoDetailPage from "./pages/PromoDetailPage";
import PromoPage from "./pages/PromoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "promo",
        element: <PromoPage />,
      },
      {
        path: "promo/:slug",
        element: <PromoDetailPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "location",
        element: <LocationPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;