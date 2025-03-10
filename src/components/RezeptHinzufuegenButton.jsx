


import React from "react";
import "../styles/RezeptHinzufuegenButton.css"; // 🔥 Stelle sicher, dass dieser Import vorhanden ist!

const RezeptHinzufuegenButton = () => {
  const handleClick = () => {
    alert("Rezept hinzufügen 🍽️");
  };

  return (
    <button className="rezept-hinzufuegen-btn" onClick={handleClick}>
      Add your recipe
    </button>
  );
};

export default RezeptHinzufuegenButton;
