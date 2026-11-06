import useFetch from "../hooks/useFetch";
import { useState } from "react";
import "../styles/contact.css";
import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setIsSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = contact.validation.nameRequired;
    }
    if (!formData.email.trim()) {
      newErrors.email = contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = contact.validation.emailInvalid;
    }
    if (!formData.message.trim()) {
      newErrors.message = contact.validation.messageRequired;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }

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

      {!isContactLoading && !contactError && contact && (
        <section className="contact-form-section container">
          <div className="contact-form-section__intro">
            <p className="eyebrow">{contact.form.eyebrow}</p>
            <h2>{contact.form.title}</h2>
            <p>{contact.form.description}</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__field">
              <label htmlFor="contact-name">{contact.form.fields.name.label}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={contact.form.fields.name.placeholder}
              />
              {errors.name && <p className="contact-form__error">{errors.name}</p>}
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email">{contact.form.fields.email.label}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={contact.form.fields.email.placeholder}
              />
              {errors.email && <p className="contact-form__error">{errors.email}</p>}
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message">
                {contact.form.fields.message.label}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder={contact.form.fields.message.placeholder}
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && (<p className="contact-form__error">{errors.message}</p>)}
            </div>

            <button className="button button--primary" type="submit">
              {contact.form.submitButton}
            </button>

          </form>
          {isSubmitted && (
            <p className="contact-form__success" role="status">
              {contact.validation.successMessage}
            </p>
          )}
        </section>
      )}
    </>
  );
}

export default ContactPage;
