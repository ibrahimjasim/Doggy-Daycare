import { useState } from "react";

const SiteHeader = ({ onGoHome, onGoCatalog, activePage = "home" }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <button
          className="logo"
          onClick={() => onGoHome()}
          aria-label="Till startsidan"
        >
          <img className="logo" src="src/assets/AppIcon.svg" alt="" />
          <h3>Skogsgläntan</h3>
        </button>

        <button
          className="nav-toggle"
          aria-label="Öppna meny"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav${navOpen ? " open" : ""}`}>
          <ul>
            <li>
              <button
                className={activePage === "home" ? "active" : ""}
                onClick={() => onGoHome()}
              >
                Hem
              </button>
            </li>
            <li>
              <button
                className={activePage === "catalog" ? "active" : ""}
                onClick={onGoCatalog}
              >
                Katalog
              </button>
            </li>
            <li>
              <button onClick={() => onGoHome("dagen")}>En dag hos oss</button>
            </li>
            <li>
              <button onClick={() => onGoHome("erbjudanden")}>Tjänster</button>
            </li>
            <li>
              <button onClick={() => onGoHome("footer")}>Kontakt</button>
            </li>
            <li>
              <button onClick={() => onGoHome("footer")}>Öppettider</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
