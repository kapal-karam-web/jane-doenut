import useFetch from "../hooks/useFetch";
import "../styles/contact.css";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";


function ContactPage() {
  /*Mengambil data dari file JSON dan memberikan 4 hal*/
  /*locations = isi datanta, isLoading = masih proses, error = gagal mengambil, retry = mencoba ambil lagi*/
  const { data: locations, isLoading, error, retry } = useFetch(
    "/data/locations.json",
  );
  const location = locations?.[0];

  return (
    <>
      {/*Bagian judul Dan Banner Awal*/}
      <section className="contact-hero">
        <h1> Contact Us </h1>
      </section>

      <section className="contact-intro container">
        <div className="contact-intro__copy">         {/* Mengelompokkan judul dan deskripsi */}
          <h2>We’d Love to Hear From You</h2>
          <p>
            Have a question, suggestion, or just want to say hello? We’re always happy
            to hear from our donut lovers!
          </p>
        </div>

        <img
          className="contact-intro__image"
          src="/images/common/gambar-judul.webp"
          alt="Pilihan Donat Jane Doenut"
        />
      </section>


      {/*Bagian Kolom data toko*/}
      {/*Pintu pengecekkan*/}
      <section className="contact-details container">
        {isLoading && (
          <LoadingSpinner message="Memuat Informasi Kontak" />
        )}

        {error && (
          <ErrorMessage message={error} onRetry={retry} />
        )}

        {!isLoading && !error && location && (
          <div className="contact-cards">
            <article className="contact-card">
              <h3>Phone Number</h3>
              <a href={"tel:" + location.phoneValue}>
                {location.phoneDisplay}
              </a>
              <p>Call us for questions, orders, or special requests.</p>
            </article>

            <article className="contact-card">
              <h3>Email Address</h3>
              <a href={"mailto:" + location.email}>
                {location.email}
              </a>
              <p>Send us an email anytime. We will get back to you soon.</p>
            </article>

            <article className="contact-card">
              <h3>Our Store</h3>
              <p>{location.address}</p>
              <p>Visit our store and enjoy fresh donuts every day.</p>
            </article>

            <article className="contact-card">
              <h3>Opening Hours</h3>
              {location.openingHours.map((schedule) => (
                <p key={schedule.days}>
                  {schedule.days}: {schedule.hours}
                </p>
              ))}
            </article>
          </div>
        )}
      </section>


      {/*Bagian Map dan Kata-kata ajakan*/}
      {!isLoading && !error && location && (
        <section className="contact-store container">
          <div className="contact-store__copy">
            <p className="eyebrow">Find Our Store</p>
            <h2> Come Visit Us</h2>
            <p>
              Come and experience our delicious donuts in person. We are located in
              the heart of Medan.
            </p>
            <a className="button button--primary" /*Membuat sebuah URL yang bisa terhubung terhubung dengan pihak lain*/
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer">
              Get Direction
            </a>
          </div>

          <div className="contact-store__map">
            <iframe                              /*Membuat sebuah jendela kecil untuk menampilkan konten di web. cntoh gmaps*/
              src={location.mapEmbedUrl}
              title={`Peta lokasi ${location.name}`}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      )}
    </>
  );
}

export default ContactPage;
