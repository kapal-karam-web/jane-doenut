import ErrorMessage from "../components/ui/ErrorMessage";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useFetch from "../hooks/useFetch";
import "../styles/about.css";

function AboutPage() {
  const { data: about, isLoading, error, retry } = useFetch("/data/about.json");

  if (isLoading) {
    return (
      <div className="page-state container">
        <LoadingSpinner message="Menyiapkan cerita Jane Doenut..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-state container">
        <ErrorMessage message={error} onRetry={retry} />
      </div>
    );
  }

  return (
    <>
      <section className="about-judul">
        <h1>{about.heroTitle}</h1>
      </section>

      <section className="about-story container">
        <div className="about-story__copy">
          <h2>{about.story.title}</h2>
          <p>{about.story.description}</p>
        </div>

        <img
          className="about-story__image"
          src={about.story.image}
          alt={about.story.imageAlt}
        />
      </section>

      <section className="about-origin">
        <div className="about-origin__content container">
          <div className="about-origin__copy">
            <h2>{about.origin.title}</h2>
            {about.origin.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <img
            className="about-origin__image"
            src={about.origin.image}
            alt={about.origin.imageAlt}
          />
        </div>
      </section>

      <section className="about-values container">
        <div className="about-values__heading">
          <h2>{about.values.title}</h2>
          <p>{about.values.subtitle}</p>
        </div>

        <div className="about-values__grid">
          {about.values.items.map((value) => (
            <article className="about-value-card" key={value.title}>
              <img src={value.image} alt={value.imageAlt} />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-choose container">
        <div className="about-choose__heading">
          <h2>{about.reasons.title}</h2>
          <p>{about.reasons.subtitle}</p>
        </div>

        <div className="about-choose__list">
          {about.reasons.items.map((reason) => (
            <article key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
