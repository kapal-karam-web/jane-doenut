function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Cari donat, bomboloni, rasa favorit...",
}) {
  return (
    <div className="menu-search">
      <div className="menu-search__wrapper">
        <span className="menu-search__icon" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape" && onClear) {
              onClear();
            }
          }}
          placeholder={placeholder}
          aria-label="Cari menu donat"
          className="menu-search__input"
        />

        {value && (
          <button
            type="button"
            onClick={onClear}
            className="menu-search__clear"
            aria-label="Hapus pencarian"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
