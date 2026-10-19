function SectionHeader({ eyebrow, title, description }) {
  return (
    <header className="section-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}

export default SectionHeader;