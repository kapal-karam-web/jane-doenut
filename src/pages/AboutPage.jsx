import "../styles/about.css";

function AboutPage() {
  return (
    <>
      {/*Judul dan gambar background*/}
      <section className="about-judul">
        <h1>Our Story</h1>
      </section>

      {/*Isi bagian kedua. narasi dan gambar*/}
      <section className="about-story container">
        <div className="about-story__copy">
          <h2>Every Donut Has a Story</h2>
          <p>
            Jane Doe Mandi lebih dari sekadar toko donat. Kami adalah tempat
            berkumpulnya suasana hati yang baik, orang-orang baik, dan donat lezat.
            Sejak 2023, kami menyajikan donat rumahan dengan rasa kreatif, bahan
            berkualitas, dan banyak cinta.
          </p>
        </div>

        <img
          className="about-story__image"
          src="/images/common/Gambar-about.webp"
          alt="Kotak donat Jane Doe Mandi" /*tulisan pengganti jika gambar gak keload*/
        />
      </section>

      {/*Isi bagian ketiga. box ceklat, narasi, dan gambar*/}
      <section className="about-origin">
        <div className="about-origin__content container">
          <div className="about-origin__copy">
            <h2>How It All Started</h2>
            <p>
              Jane Doenut berawal dari mimpi kecil di dapur dan kecintaan pada
              donat. Dari dukungan teman dan keluarga, usaha ini tumbuh menjadi
              tempat yang menghadirkan kebahagiaan.
            </p>
            <p>
              Kami percaya donat yang lezat bisa menciptakan momen kecil yang
              menyenangkan.
            </p>
          </div>

          <img
            className="about-origin__image"
            src="/images/common/gambar-about2.webp"
            alt="Donat Jane Doe Mandi di atas meja"
          />

        </div>
      </section>

      <section className="about-values container">
        <div className="about-values__heading">
          <h2>Our Values</h2>
          <p>The sweet things we always believe in</p>
        </div>

        <div className="about-values__grid">
          <article className="about-value-card"> {/*menandai satu bagian informasi yang sifatnya berdiri sendiri*/}
            <img
              src="/images/common/value-gambar1.webp"
              alt="Bahan-bahan untuk membuat donat"
            />
            <h3>Fresh Ingredients</h3>
            <p>Kami menggunakan bahan berkualitas agar setiap donat terasa segar,
              lembut, dan penuh rasa.</p>
          </article>

          <article className="about-value-card">
            <img
              src="/images/common/value-gambar2.webp"
              alt="Donat yang dibuat dengan penuh perhatian"
            />
            <h3>Made With Love</h3>
            <p>
              Setiap donat dibuat dengan perhatian karena kami percaya cinta membuat
              semuanya terasa lebih baik.
            </p>
          </article>

          <article className="about-value-card">
            <img
              src="/images/common/value-gambar3.webp"
              alt="Donat untuk berbagai momen"
            />
            <h3>For Every Moment</h3>
            <p>
              Dari camilan harian sampai perayaan, donat kami hadir untuk membuat
              setiap momen lebih manis.
            </p>
          </article>
        </div>
      </section>

      <section className="about-choose container">
        <div className="about-choose__heading">
          <h2> Why Customers Choose Us</h2>
          <p>More Than Just Donuts</p>
        </div>

        <div className="about-choose__list">
          <article>
            <h3>Unique Flavors</h3>
            <p>Rasa kreatif dan lezat yang sulit ditemukan di tempat lain.</p>
          </article>

          <article>
            <h3>Consistent Quality</h3>
            <p>Selalu segar dan dibuat dengan kualitas yang sama setiap hari.</p>
          </article>

          <article>
            <h3>A Happier Community</h3>
            <p>Kami bangga menjadi bagian dari momen manis pelanggan.</p>
          </article>
        </div>
    </section >
    </>
  );
}



export default AboutPage;