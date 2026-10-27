import useFetch from "../hooks/useFetch";
import "../styles/contact.css";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";

function ContactPage() {
  const {
    data: contact,
    isLoading: isContactLoading,
    error: contactError,
    retry: retryContact,
  } = useFetch("/data/contact.json");
  const {
    data: locations,
    isLoading: isLocationsLoading,
    error: locationsError,
    retry: retryLocations,
  } = useFetch("/data/locations.json");
  const location = locations?.[0];
  const isLocationLoading = isLocationsLoading || isContactLoading;

  return (
    <>
      {!isContactLoading && !contactError && contact && (
        <>
          <section className="contact-hero">
            <h1>{contact.heroTitle}</h1>
          </section>

          <section className="contact-intro container">
            <div className="contact-intro__copy">
              <h2>{contact.intro.title}</h2>
              <p>{contact.intro.description}</p>
            </div>

            <img
              className="contact-intro__image"
              src={contact.intro.image}
              alt={contact.intro.imageAlt}
            />
          </section>
        </>
      )}

      {contactError && (
        <section className="contact-details container">
          <ErrorMessage message={contactError} onRetry={retryContact} />
        </section>
      )}

      <section className="contact-details container">
        {isLocationLoading && (
          <LoadingSpinner message="Memuat informasi kontak..." />
        )}

        {locationsError && (
          <ErrorMessage message={locationsError} onRetry={retryLocations} />
        )}

        {!isLocationLoading && !locationsError && location && contact && (
          <div className="contact-cards">
            <article className="contact-card">
              <h3>{contact.cards.phone.title}</h3>
              <a href={`tel:${location.phoneValue}`}>
                {location.phoneDisplay}
              </a>
              <p>{contact.cards.phone.description}</p>
            </article>

            <article className="contact-card">
              <h3>{contact.cards.email.title}</h3>
              <a href={`mailto:${location.email}`}>{location.email}</a>
              <p>{contact.cards.email.description}</p>
            </article>

            <article className="contact-card">
              <h3>{contact.cards.store.title}</h3>
              <p>{location.address}</p>
              <p>{contact.cards.store.description}</p>
            </article>

            <article className="contact-card">
              <h3>{contact.cards.hours.title}</h3>
              {location.openingHours.map((schedule) => (
                <p key={schedule.days}>
                  {schedule.days}: {schedule.hours}
                </p>
              ))}
            </article>
          </div>
        )}
      </section>

      {!isLocationLoading && !locationsError && location && contact && (
        <section className="contact-store container">
          <div className="contact-store__copy">
            <p className="eyebrow">{contact.store.eyebrow}</p>
            <h2>{contact.store.title}</h2>
            <p>{contact.store.description}</p>
            <a
              className="button button--primary"
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              {contact.store.directionsButton}
            </a>
          </div>

          <div className="contact-store__map">
            <iframe
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
