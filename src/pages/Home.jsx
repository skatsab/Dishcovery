import FlaggenListe from "../components/FlaggenListe"; 
import Empfehlungen from "../components/Empfehlungen";
import RezeptHinzufuegenButton from "../components/RezeptHinzufuegenButton"; // 🔥 Button importieren
import Map from "../components/Map";

const Home = () => {
  return (
    <div>
      <image src="/logo512.png" alt="Logo"/>
      <Map />
      <h2>Top Countries</h2>
      <FlaggenListe />
      <Empfehlungen />

      {/* Rezept hinzufügen-Button unten einfügen */}
      <div className="button-container">
        <RezeptHinzufuegenButton />
      </div>
    </div>
  );
};

export default Home;
