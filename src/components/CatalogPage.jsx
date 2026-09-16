import { useEffect, useState } from "react";
import { fetchDogs } from "../components/DogData";
import "./CatalogPage.css";
import SiteHeader from "./SiteHeader.jsx";
import DogImage from "./DogImage";

const CatalogPage = ({ onSelectDog, onGoHome, onGoCatalog }) => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredDogs = dogs.filter((dog) =>
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
                <h3>{dog.name}</h3>
                <p className="dog-catalog-breed">{dog.breed}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
