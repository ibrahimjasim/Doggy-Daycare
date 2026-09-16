import SiteHeader from "./SiteHeader.jsx";
import "./DogDetailPage.css";
import DogImage from "./DogImage";

const DogDetailPage = ({ dog, onBack, onGoHome, onGoCatalog }) => {
  if (!dog) {
    return (
      <>
        <SiteHeader
          onGoHome={onGoHome}
          onGoCatalog={onGoCatalog}
          activePage="catalog"
        />
        <section className="dog-detail-page">
          <div className="container">
            <p>Hunden kunde inte hittas.</p>
            <button className="dog-detail-back" onClick={onBack}>
              Tillbaka till katalogen
            </button>
          </div>
        </section>
      </>
    );
  }

  const { name, breed, age, sex, img, present, owner } = dog;

  return (
    <>
      <SiteHeader
        onGoHome={onGoHome}
        onGoCatalog={onGoCatalog}
        activePage="catalog"
      />
      <section className="dog-detail-page">
        <div className="container">
          <button className="dog-detail-back" onClick={onBack}>
            ← Tillbaka till katalogen
          </button>

          <div className="dog-detail-grid">
            <DogImage
              className="dog-detail-image"
              src={dog.img}
              alt={dog.name}
            />
            <div className="dog-detail-info">
              <h1>{name}</h1>
              <p className="dog-detail-breed">{breed}</p>

              <ul className="dog-detail-facts">
                <li>
                  <span className="fact-label">Ålder</span>
                  <span className="fact-value">{age} år</span>
                </li>
                <li>
                  <span className="fact-label">Kön</span>
                  <span className="fact-value">
                    {sex === "female" ? "Tik" : "Hane"}
                  </span>
                </li>
                <li>
                  <span className="fact-label">Status</span>
                  <span
                    className={`dog-detail-status ${present ? "present" : "home"}`}
                  >
                    {present ? "På plats" : "Hemma"}
                  </span>
                </li>
              </ul>

              <div className="dog-detail-owner">
                <h2>Ägare</h2>
                <p>
                  {owner.name} {owner.lastName}
                </p>
                <p>Telefon: {owner.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DogDetailPage;
