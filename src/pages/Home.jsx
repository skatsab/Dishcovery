import FlaggenListe from "../components/FlaggenListe"; 
import Empfehlungen from "../components/Empfehlungen";
import RezeptHinzufuegenButton from "../components/RezeptHinzufuegenButton"; // 🔥 Button importieren

const Home = () => {
  return (
    <div>
      <h1>Dishcovery</h1>
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
