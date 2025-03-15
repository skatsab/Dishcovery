import React from "react";
import RezeptKarte from "./RezeptKarte";
import "../styles/RezeptListe.css";

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
        <p>Keine Rezepte gefunden.</p>
      )}
    </div>
  );
};

export default RezeptListe;
