// Placeholder – fylls på med fetch mot API:t senare (Jonathans del)
import DogData from "../components/DogData";
const CatalogPage = () => {
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
