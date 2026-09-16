// import { HashRouter, Routes, Route, Link } from "react-router-dom";
// import WelcomePage from "./components/WelcomePage";
// import CatalogPage from "./components/CatalogPage";
// import DogDetailPage from "./components/DogDetailPage";
// import "./App.css";

// // HashRouter används istället för BrowserRouter eftersom GitHub Pages
// // är statisk hosting och inte klarar direktladdning av under-URL:er
// const App = () => {
//   return (
//     <HashRouter>
//       <nav className="main-nav">
//         <Link to="/">Hem</Link>
//         <Link to="/catalog">Katalog</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<WelcomePage />} />
//         <Route path="/catalog" element={<CatalogPage />} />
//         <Route path="/dogs/:id" element={<DogDetailPage />} />
//       </Routes>
//     </HashRouter>
//   );
// };

// export default App;



​import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import CatalogPage from "./components/CatalogPage";
import DogDetailPage from "./components/DogDetailPage";
import "./App.css";

const SCREENS = {
  WELCOME: "welcome",
  CATALOG: "catalog",
  DETAIL: "detail"
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(SCREENS.WELCOME);
  const [selectedDog, setSelectedDog] = useState(null);

  const goToCatalog = () => setCurrentPage(SCREENS.CATALOG);

  const goToDetail = (dog) => {
   setSelectedDog(dog);
   setCurrentPage(SCREENS.DETAIL);
 };

  const goBackToCatalog = () => {
   setSelectedDog(null);
   setCurrentPage(SCREENS.CATALOG);
 };

  return (
   <div>
     <nav className="main-nav">
       <button onClick={() => setCurrentPage(SCREENS.WELCOME)}>Hem</button>
       <button onClick={goToCatalog}>Katalog</button>
     </nav>

     {currentPage === SCREENS.WELCOME && <WelcomePage onStart={goToCatalog} />}
     {currentPage === SCREENS.CATALOG && <CatalogPage onSelectDog={goToDetail} />}
     {currentPage === SCREENS.DETAIL && (
       <DogDetailPage dog={selectedDog} onBack={goBackToCatalog} />
     )}
   </div>
 );
};

export default App;