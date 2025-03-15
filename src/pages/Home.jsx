import FlaggenListe from "../components/FlaggenListe"; 
import Empfehlungen from "../components/Empfehlungen";
import CustomButton from "../components/CustomButton";
import Map from "../components/Map";

const Home = () => {
  return (
    <div>
      <image src="/logo512.png" alt="Logo"/>
      <Map />
      <h2>Top Countries</h2>
      <FlaggenListe />
      <Empfehlungen />

      <div className="button-container">
        <CustomButton text="Add your recipe" path="/add-recipe" />
        <CustomButton text="Plan your week" path="/weekplan" />
        <CustomButton text="Track calories" path="/calories" />
        <CustomButton text="Shopping list" path="/shoppinglist" />
      </div>
    </div>
  );
};

export default Home;
