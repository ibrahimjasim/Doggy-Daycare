import { useEffect, useState } from "react";

const URL = "https://api.jsonbin.io/v3/b/6aa9183fffd5d16053092bd3";

function DogData() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(`Status ${response.status}`);
        const data = await response.json();
        console.log(data);
        setDogs(data.record);
      } catch (err) {
        setError(err.message);
      }
    };
    getData();
  }, []);

  if (error) return <p>Kunde inte hämta hundar: {error}</p>;

  return (
    <div>
      {dogs.map((dog) => (
        <p key={dog.chipNumber}>{dog.name}</p>
      ))}
    </div>
  );
}

export default DogData;
