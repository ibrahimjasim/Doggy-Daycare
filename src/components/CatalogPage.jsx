import { useEffect, useState } from "react";
import { fetchDogs } from "../components/DogData";

const CatalogPage = ({ onSelectDog }) => {
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
    <section className="catalog-page">
      <h1>Våra hundar</h1>
      {/* <p>Här listas alla registrerade hundar.</p> */}

      {/* SEARCH FIELD */}
      <input
        type="text"
        placeholder="Sök hund..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* GRID WITH ALL THE DOGS */}
      <div className="catalog-grid">
        {filteredDogs.map((dog) => (
          <button
            key={dog.chipNumber}
            className="dog-card"
            onClick={() => onSelectDog(dog)}
          >
            <img src={dog.img} alt={dog.name} />
            <h3>{dog.name}</h3>
            <p>{dog.breed}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CatalogPage;
