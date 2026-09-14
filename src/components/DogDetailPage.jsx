import { useParams } from "react-router-dom";

// Placeholder – fylls på med riktig hunddata baserat på :id senare (Ruths del)
const DogDetailPage = () => {
  const { id } = useParams(); // Läser ut hund-id:t från URL:en

  return (
    <section className="dog-detail-page">
      <h1>Hundens detaljsida</h1>
      <p>Visar information om hund med id: {id}</p>
    </section>
  );
};

export default DogDetailPage;