function LocationCard({ location }) {
  return (
    <article className="location-card">
      <div className="location-card__content">
        <p className="eyebrow">Kunjungi Outlet</p>
        <h2>{location.name}</h2>

        <div className="location-card__information">
          <section>
            <h3>Alamat</h3>
            <address>
              {location.address}
              <br />
              {location.city}
            </address>
          </section>

          <section>
            <h3>Jam buka</h3>

            <dl className="opening-hours">
              {location.openingHours.map((schedule) => (
                <div key={schedule.days}>
                  <dt>{schedule.days}</dt>
                  <dd>{schedule.hours}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h3>Kontak</h3>

            <ul className="location-contact">
              <li>
                <a href={`tel:${location.phoneValue}`}>
                  {location.phoneDisplay}
                </a>
              </li>

              <li>
                <a href={`mailto:${location.email}`}>
                  {location.email}
                </a>
              </li>
            </ul>
          </section>
        </div>

        <a
          className="button button--primary"
          href={location.mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          Buka di Google Maps
        </a>
      </div>

      <div className="location-card__map">
        <iframe
          src={location.mapEmbedUrl}
          title={`Peta lokasi ${location.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </article>
  );
}

export default LocationCard;