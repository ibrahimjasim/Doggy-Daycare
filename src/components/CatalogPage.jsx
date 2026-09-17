import { useEffect, useState } from "react";
import { fetchDogs } from "../components/DogData";
import "./CatalogPage.css";
import SiteHeader from "./SiteHeader.jsx";
import DogImage from "./DogImage";

const SORTING = {
  AGE: "age",
  BREED: "breed",
  NAME: "name",
  PRESENT: "present",
};

const CatalogPage = ({ onSelectDog, onGoHome, onGoCatalog }) => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetchDogs()
      .then((data) => {
        setDogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Kunde inte apportera hundarna just nu...");
        setLoading(false);
      });
  }, []);

  const getSortedDogs = (dogsList) => {
    const copiedDogs = [...dogsList];

    switch (sortOption) {
      case SORTING.AGE:
        return copiedDogs.sort((a, b) => a.age - b.age);
      case SORTING.BREED:
        return copiedDogs.sort((a, b) => a.breed.localeCompare(b.breed));
      case SORTING.NAME:
        return copiedDogs.sort((a, b) => a.name.localeCompare(b.name));
      case SORTING.PRESENT:
        return copiedDogs.filter((dog) => dog.present);
      default:
        return copiedDogs;
    }
  };

  const filteredDogs = getSortedDogs(dogs).filter((dog) =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) return <p>Apporterar hundar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <SiteHeader
        onGoHome={onGoHome}
        onGoCatalog={onGoCatalog}
        activePage="catalog"
      />
      <section className="catalog-page">
        <div className="container">
          <h1>Våra hundar</h1>

          <h3>Sortera efter:</h3>
          <div className="sort-buttons-container">
            <button
              className="sort-button"
              onClick={() => setSortOption(SORTING.AGE)}
            >
              Ålder
            </button>
            <button
              className="sort-button"
              onClick={() => setSortOption(SORTING.BREED)}
            >
              Ras
            </button>
            <button
              className="sort-button"
              onClick={() => setSortOption(SORTING.NAME)}
            >
              Namn
            </button>
            <button
              className="sort-button"
              id="reset-sort"
              onClick={() => setSortOption("")}
            >
              Återställ
            </button>
          </div>

          <input
            type="text"
            placeholder="Kalla på en hund..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="catalog-grid">
            {filteredDogs.map((dog) => (
              <button
                key={dog.chipNumber}
                className="dog-card"
                onClick={() => onSelectDog(dog)}
              >
                <DogImage src={dog.img} alt={dog.name} />
                <div className="info-container">
                  <div className="info-column">
                    <h3>{dog.name}</h3>
                    <p className="dog-catalog-breed">{dog.breed}</p>
                  </div>
                  <div className="info-column">
                    <p className="dog-catalog-age">{dog.age} år</p>
                    <p
                      className={`dog-catalog-sex ${dog.sex === "female" ? "female" : "male"}`}
                    >
                      {dog.sex === "female" ? "Tik" : "Hane"}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
