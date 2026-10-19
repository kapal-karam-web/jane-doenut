import { useParams } from "react-router-dom";

function PromoDetailPage() {
  const { slug } = useParams();

  return (
    <section className="page-placeholder container">
      <p className="eyebrow">Detail promo</p>
      <h1>{slug.split("-").join(" ")}</h1>
      <p>
        Rincian paket promo akan disiapkan oleh Eru.
      </p>
    </section>
  );
}

export default PromoDetailPage;