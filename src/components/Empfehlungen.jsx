import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Empfehlungen.css";

const empfehlungenRezepte = [
  { id: 1, name: "Tiramisu", image: "/images/tiramisu.jpg" },
  { id: 2, name: "Mujadara", image: "/images/mujadara.jpg" },
  { id: 3, name: "Schwarzwälder Kirschtorte", image: "/images/schwarzwaelder.jpeg" }
];

const Empfehlungen = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/rezept/${id}`);
  };

  return (
    <div className="empfehlungen-liste">
      <h2>Empfohlene Rezepte</h2>
      <div className="rezepte-container">
        {empfehlungenRezepte.map((rezept) => (
          <div key={rezept.id} className="rezept-karte" onClick={() => handleClick(rezept.id)}>
            <img src={rezept.image} alt={rezept.name} />
            <h3>{rezept.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Empfehlungen;
