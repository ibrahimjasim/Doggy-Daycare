import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import CatalogPage from "./components/CatalogPage";
import DogDetailPage from "./components/DogDetailPage";
import "./App.css";
// import DogData from "./components/DogData";


const SCREENS = {
    WELCOME: "welcome",
    CATALOG: "catalog",
    DETAIL: "detail"
};


const App = () => {
    const [currentPage, setCurrentPage] = useState(SCREENS.WELCOME);
    const [selectedDog, setSelectedDog] = useState(null);

    const goToCatalog = () => setCurrentPage(SCREENS.CATALOG);

    const goToDetail = (dog) => {
        setSelectedDog(dog);
        setCurrentPage(SCREENS.DETAIL);
    };

    const goBackToCatalog = () => {
        setSelectedDog(null);
        setCurrentPage(SCREENS.CATALOG);
    };

    const goHome = (sectionId) => {
        setCurrentPage(SCREENS.WELCOME);
        setTimeout(() => {
            if (sectionId) {
                const el = document.getElementById(sectionId);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    return;
                }
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    return (
        <div>
            {currentPage === SCREENS.WELCOME && (
                <WelcomePage onStart={goToCatalog} onGoHome={goHome} onGoCatalog={goToCatalog} />
            )}
            {currentPage === SCREENS.CATALOG && (
                <CatalogPage onSelectDog={goToDetail} onGoHome={goHome} onGoCatalog={goToCatalog} />
            )}
            {currentPage === SCREENS.DETAIL && (
                <DogDetailPage dog={selectedDog} onBack={goBackToCatalog} onGoHome={goHome} onGoCatalog={goToCatalog} />
            )}
        </div>
    );
};

export default App;