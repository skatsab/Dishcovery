import { useParams } from "react-router-dom";
import RezeptListe from "../components/RezeptListe";

const Landseite = () => {
  const { land } = useParams();

  return (
    <div>
      <h1>Rezepte aus {land}</h1>
      <RezeptListe land={land} />
    </div>
  );
};

export default Landseite;
