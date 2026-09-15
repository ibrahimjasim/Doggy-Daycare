import { HashRouter, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CatalogPage from "./components/CatalogPage";
import DogDetailPage from "./components/DogDetailPage";
import "./App.css";
import DogData from "./components/DogData";

// HashRouter används istället för BrowserRouter eftersom GitHub Pages
// är statisk hosting och inte klarar direktladdning av under-URL:er
const App = () => {
  return (
    <HashRouter>
      <nav className="main-nav">
        <Link to="/">Hem</Link>
        <Link to="/catalog">Katalog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/dogs/:id" element={<DogDetailPage />} />
      </Routes>
    </HashRouter>
    // <DogData />
  );
};

export default App;
