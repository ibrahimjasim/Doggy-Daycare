import { useEffect, useState } from "react";

// Placeholder – fylls på med fetch mot API:t senare (Jonathans del)


// MOCKDATA -- SEX HUNDAR FRÅN API:et
const dogs = [
  {
      "name": "Molly",
      "sex": "female",
      "breed": "briard",
      "img": "https://images.dog.ceo/breeds/briard/n02105251_6840.jpg",
      "present": false,
      "age": 4,
      "chipNumber": "IEH455006",
      "owner": {
        "name": "Wilmer",
        "lastName": "Svensson",
        "phoneNumber": "0769239356"
      }
    },
    {
      "name": "Bella",
      "sex": "female",
      "breed": "labrador",
      "img": "https://images.dog.ceo/breeds/labrador/n02099712_3947.jpg",
      "present": false,
      "age": 1,
      "chipNumber": "HPF367168",
      "owner": {
        "name": "Tina",
        "lastName": "Ahlberg",
        "phoneNumber": "0732303484"
      }
    },
    {
      "name": "Charlie",
      "sex": "male",
      "breed": "retriever",
      "img": "https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_3645.jpg",
      "present": true,
      "age": 5,
      "chipNumber": "DBP669806",
      "owner": {
        "name": "Tina",
        "lastName": "Hök",
        "phoneNumber": "0708671977"
      }
    },
    {
      "name": "Ludde",
      "sex": "male",
      "breed": "greyhound",
      "img": "https://images.dog.ceo/breeds/greyhound-italian/n02091032_907.jpg",
      "present": true,
      "age": 5,
      "chipNumber": "HLM936015",
      "owner": {
        "name": "David",
        "lastName": "Emraz",
        "phoneNumber": "0762592136"
      }
    },
    {
      "name": "Doris",
      "sex": "female",
      "breed": "groenendael",
      "img": "https://images.dog.ceo/breeds/groenendael/n02105056_2194.jpg",
      "present": true,
      "age": 8,
      "chipNumber": "ELN562847",
      "owner": {
        "name": "David",
        "lastName": "Ahlberg",
        "phoneNumber": "0765237613"
      }
    },
    {
      "name": "Sigge",
      "sex": "male",
      "breed": "husky",
      "img": "https://images.dog.ceo/breeds/husky/n02110185_8860.jpg",
      "present": false,
      "age": 7,
      "chipNumber": "HAA378909",
      "owner": {
        "name": "Moa",
        "lastName": "Jonsson",
        "phoneNumber": "0705896593"
      }
    }
]


const CatalogPage = ({ onSelectDog }) => {

  // const [dogs, setDogs] = useState([]);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetchDogs().then((data) => {
  //     setDogs(data);

  //     // setLoading(false);
  //   })
  //   // .catch((err) => {
  //   //   setError("Kunde inte apportera hundarna just nu...");
  //   //   setLoading(false);
  //   // });
  // }, []);

  const filteredDogs = dogs.filter((dog) => 
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // if (loading) return <p>Apporterar hundar...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <section className="catalog-page">
      <h1>Våra hundar</h1>
      {/* <p>Här listas alla registrerade hundar.</p> */}


    {/* OM VI ÖNSKAR ETT SÖKFÄLT */}

      {/* <input type="text"
      placeholder="Sök hund..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input" /> */}

      <div className="catalog-grid">
        {filteredDogs.map((dog) => (
          <button
            key={dog.id}
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