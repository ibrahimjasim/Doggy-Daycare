import { useState } from "react";

const SiteHeader = ({ onGoHome, onGoCatalog, activePage = "home" }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="site-header">   
            <div className="container">
                <button className="logo" onClick={() => onGoHome()} aria-label="Till startsidan">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 3C10 3 5 9 5 16c0 8 5 13 12 15 7-2 12-7 12-15 0-7-5-13-12-13Z" fill="#566447" />
                        <path d="M12 14c1.5 3 2.5 6 2.5 9M22 14c-1.5 3-2.5 6-2.5 9" stroke="#F3ECDC" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    Skogsgläntan
                </button>

                <button
                    className="nav-toggle"
                    aria-label="Öppna meny"
                    aria-expanded={navOpen}
                    onClick={() => setNavOpen((open) => !open)}
                >
                    <span></span><span></span><span></span>
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
                        <li><button onClick={() => onGoHome("dagen")}>En dag hos oss</button></li>
                        <li><button onClick={() => onGoHome("erbjudanden")}>Tjänster</button></li>
                        <li><button onClick={() => onGoHome("footer")}>Kontakt</button></li>
                        <li><button onClick={() => onGoHome("footer")}>Öppettider</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default SiteHeader;