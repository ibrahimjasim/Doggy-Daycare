import { useState } from "react";
import "./WelcomePage.css";
import SiteHeader from "./SiteHeader.jsx";
import dogsInWoods from "../assets/dogs_in_woods.jpg";
import dogsOnField from "../assets/dogs_on_field.jpg";

// Startsidan – hälsar besökare välkomna till Skogsgläntan
const WelcomePage = ({ onStart, onGoHome, onGoCatalog }) => {
  return (
    <>
      <SiteHeader
        onGoHome={onGoHome}
        onGoCatalog={onGoCatalog}
        activePage="home"
      />

      <main>
        {/* HERO */}
        <section aria-labelledby="hero-heading">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1 id="hero-heading">Välkommen till Skogsgläntan</h1>
              <p className="hero-lead">
                Vi tar hand om din hund som om den vore vår egen — fasta
                rutiner, riktiga skogspromenader och en liten, trygg grupp att
                vara del av varje dag.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={onStart}>
                  Våra hundar
                </button>
                <a href="#erbjudanden" className="btn btn-ghost">
                  Se våra tjänster
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <img
                className="hero-visual-main"
                src={dogsInWoods}
                alt="Hundar som leker tillsammans på en skogspromenad"
              />
              <img
                className="hero-visual-accent"
                src={dogsOnField}
                alt="Hundar på förmiddagspromenad på en äng"
              />
              <span className="hero-visual-note">
                Hundarna på promenad
                <br />
              </span>
            </div>
          </div>
        </section>

        {/* SCHEDULE */}
        <section
          id="dagen"
          className="section-alt"
          aria-labelledby="dagen-heading"
        >
          <div className="container">
            <div className="section-intro">
              <h2 id="dagen-heading">En dag hos oss</h2>
              <p>
                Hundarna trivs bäst med förutsägbarhet. Så här brukar en vanlig
                dag se ut.
              </p>
            </div>

            <ol className="timeline">
              <li>
                <span className="timeline-time">06.30</span>
                <div className="timeline-content">
                  <h3>Öppning &amp; morgonhälsning</h3>
                  <p>
                    Lugn incheckning, en och en, så att alla får landa innan
                    gruppen samlas.
                  </p>
                </div>
              </li>
              <li>
                <span className="timeline-time">08.30</span>
                <div className="timeline-content">
                  <h3>Första skogspromenaden</h3>
                  <p>
                    Vi går de fasta stigarna i skogen bakom gården — nya dofter,
                    lagom tempo.
                  </p>
                </div>
              </li>
              <li>
                <span className="timeline-time">12.00</span>
                <div className="timeline-content">
                  <h3>Lugn stund &amp; vila</h3>
                  <p>
                    Mat för de som äter dagtid, sedan vila inomhus medan dagens
                    värme lägger sig.
                  </p>
                </div>
              </li>
              <li>
                <span className="timeline-time">14.00</span>
                <div className="timeline-content">
                  <h3>Fri lek i hägnet</h3>
                  <p>
                    Bollar, vattenpölar och gruppens egna lekar — alltid med en
                    hundvakt på plats.
                  </p>
                </div>
              </li>
              <li>
                <span className="timeline-time">16.00</span>
                <div className="timeline-content">
                  <h3>Eftermiddagspromenad</h3>
                  <p>En kortare runda för att varva ner inför hämtning.</p>
                </div>
              </li>
              <li>
                <span className="timeline-time">17.00–18.30</span>
                <div className="timeline-content">
                  <h3>Hämtning</h3>
                  <p>
                    Vi berättar kort hur dagen har varit innan ni går hem
                    tillsammans.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* SERVICES */}
        <section id="erbjudanden" aria-labelledby="erbjuder-heading">
          <div className="container offer-grid">
            <div className="offer-lead">
              <h2 id="erbjuder-heading">Vad vi erbjuder</h2>
              <p>
                Vi tror på små grupper, mycket utevistelse och personal som kan
                varje hund vid namn. Ingen dag är identisk, men strukturen är
                alltid densamma.
              </p>
            </div>

            <ul className="offer-list">
              <li>
                <span className="offer-icon">
                  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                    <path
                      d="M4 20c4-10 14-10 18-16M4 20c6 1 12-1 16-6"
                      stroke="#B07A3E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3>Dagomsorg, vardagar</h3>
                  <p>
                    Heldagar eller halvdagar, med fast grupp och fasta
                    hundvakter.
                  </p>
                </div>
              </li>
              <li>
                <span className="offer-icon">
                  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                    <circle
                      cx="13"
                      cy="13"
                      r="9"
                      stroke="#B07A3E"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M13 8v5l3.5 2"
                      stroke="#B07A3E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3>Introträff</h3>
                  <p>
                    En avgiftsfri provdag så att din hund får vänja sig i sin
                    egen takt.
                  </p>
                </div>
              </li>
              <li>
                <span className="offer-icon">
                  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                    <path
                      d="M3 13h20M13 3v20"
                      stroke="#B07A3E"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3>Helg- &amp; lovpassning</h3>
                  <p>
                    För de dagar den vanliga vardagsplaneringen inte räcker
                    till.
                  </p>
                </div>
              </li>
              <li>
                <span className="offer-icon">
                  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                    <rect
                      x="3"
                      y="8"
                      width="20"
                      height="12"
                      rx="2"
                      stroke="#B07A3E"
                      strokeWidth="1.6"
                    />
                    <path d="M3 12h20" stroke="#B07A3E" strokeWidth="1.6" />
                  </svg>
                </span>
                <div>
                  <h3>Hämtning &amp; lämning</h3>
                  <p>
                    Skjuts inom nära omgivning för familjer som saknar egen bil.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA-BANNER */}
        <section className="cta-banner-wrap">
          <div className="container">
            <div className="cta-banner-inner">
              <div>
                <h2>Redo att hälsa på?</h2>
                <p>Boka en kostnadsfri introträff så ses vi i skogsbrynet.</p>
              </div>
              <a href="#footer" className="btn btn-primary">
                Boka introträff
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="footer" className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Skogsgläntan</div>
              <p>
                Hunddagis i skogsbrynet, med dagliga promenader och små, trygga
                grupper.
              </p>
            </div>
            <div>
              <h4>Kontakt</h4>
              <ul>
                <li>
                  <a href="tel:0700000000">070-000 00 00</a>
                </li>
                <li>
                  <a href="mailto:hej@skogsglantan.se">hej@skogsglantan.se</a>
                </li>
                <li>Skogsvägen 12, 430 00</li>
              </ul>
            </div>
            <div>
              <h4>Öppettider</h4>
              <ul>
                <li>Mån–fre: 06.30–18.30</li>
                <li>Lov &amp; helg: efter behov</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Skogsgläntan Hunddagis</span>
            <span>Org.nr 000000-0000</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default WelcomePage;
