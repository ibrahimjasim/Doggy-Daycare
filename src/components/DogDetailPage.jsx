const DogDetailPage = ({ dog, onBack }) => {
  if (!dog) {
    return (
      <section className="dog-detail-page">
        <p>Hunden kunde inte hittas.</p>
        <button onClick={onBack}>Tillbaka till katalogen</button>
      </section>
    );
  }

  const { name, breed, age, sex, img, present, owner } = dog;

  return (
    <section className="dog-detail-page">
      <button onClick={onBack}>Tillbaka till katalogen</button>

      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>Ras: {breed}</p>
      <p>Ålder: {age} år</p>
      <p>Kön: {sex === "female" ? "Tik" : "Hane"}</p>
      <p>Status: {present ? "På plats" : "Hemma"}</p>

      <h2>Ägare</h2>
      <p>{owner.name} {owner.lastName}</p>
      <p>Telefon: {owner.phoneNumber}</p>
    </section>
  );
};

export default DogDetailPage;