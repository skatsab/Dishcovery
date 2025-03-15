import React from "react";
import { Link } from "react-router-dom";  // Falls du den Button zu einer Seite weiterleiten möchtest
import RezeptKarte from "./RezeptKarte";
import "../styles/RezeptListe.css";
import RezeptHinzufuegenButton from "./RezeptHinzufuegenButton";

const rezepteData = {
  Italien: [
    { id: 1, name: "Tiramisu", image: "/images/tiramisu.jpg" }
  ],
  Syrien: [
    { id: 2, name: "Mujadara", image: "/images/mujadara.jpg" }
  ],
  Deutschland: [
    { id: 3, name: "Schwarzwälder Kirschtorte", image: "/images/schwarzwaelder.jpeg" }
  ]
};

const RezeptListe = ({ land }) => {
  const rezepte = rezepteData[land] || [];

  return (
    <div className="rezept-liste">
      {rezepte.length > 0 ? (
        rezepte.map((rezept) => <RezeptKarte key={rezept.id} rezept={rezept} />)
      ) : (
        <div>
          <p>Keine Rezepte gefunden.</p>
          <Link to="/rezept-hinzufuegen">  {/* Der Button führt zur Seite zum Hinzufügen von Rezepten */}
            <RezeptHinzufuegenButton />
          </Link>
        </div>
      )}
    </div>
  );
};

export default RezeptListe;
