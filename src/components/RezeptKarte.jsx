import React from "react";
import { useNavigate } from "react-router-dom";

const RezeptKarte = ({ rezept }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/rezept/${rezept.id}`);
  };

  return (
    <div className="rezept-karte" onClick={handleClick}>
      <img src={rezept.image} alt={rezept.name} />
      <h3>{rezept.name}</h3>
      <button>Mehr erfahren</button>
    </div>
  );
};

export default RezeptKarte;
