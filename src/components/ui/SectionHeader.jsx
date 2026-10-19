function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <header
      className={`section-header section-header--${align}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}

      <h2>{title}</h2>

      {description && (
        <p className="section-header__description">
          {description}
        </p>
      )}
    </header>
  );
}

export default SectionHeader;