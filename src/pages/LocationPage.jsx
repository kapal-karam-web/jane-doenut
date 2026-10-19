import LocationCard from "../components/location/LocationCard";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import SectionHeader from "../components/ui/SectionHeader";
import useFetch from "../hooks/useFetch";
import "../styles/location.css";

function LocationPage() {
  const {
    data: locations,
    isLoading,
    error,
    retry,
  } = useFetch("/data/locations.json");

  return (
    <>
      <section className="location-hero">
        <div className="container location-hero__content">
          <p className="eyebrow">Location</p>
          <h1>Temukan Jane Doenut di dekatmu</h1>
          <p>
            Lihat alamat, jam buka, dan informasi kontak sebelum
            berkunjung ke Jane Doenut.
          </p>
        </div>
      </section>

      <section className="location-list section">
        <div className="container">
          <SectionHeader
            eyebrow="Lokasi Kami"
            title="Datang dan nikmati pilihan favoritmu"
            description="Gunakan informasi berikut untuk merencanakan kunjungan ke Jane Doenut."
          />

          {isLoading && (
            <div className="location-list__state">
              <LoadingSpinner message="Mengambil informasi lokasi..." />
            </div>
          )}

          {error && (
            <div className="location-list__state">
              <ErrorMessage
                message={error}
                onRetry={retry}
              />
            </div>
          )}

          {!isLoading && !error && locations?.length === 0 && (
            <div className="location-list__empty">
              <h2>Lokasi belum tersedia</h2>
              <p>Informasi lokasi akan ditambahkan segera.</p>
            </div>
          )}

          {!isLoading && !error && locations?.length > 0 && (
            <div className="location-list__grid">
              {locations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default LocationPage;