import React from "react";
import { useNavigate } from "react-router-dom";  // Wir verwenden useNavigate für das Routing

// Deine Länder- und Kürzel-Mapping-Datei (countryCodes.js)
import countryCodes from "../utils/countryCodes";  // Hier verwenden wir die Kürzel (z.B. DE für Deutschland)

const PageManager = () => {
  const navigate = useNavigate(); // Verwenden von useNavigate für programmgesteuertes Routing

  // Methode, die die Landseite aufruft
  const goToLandseite = (countryCode) => {
    // Die Methode erwartet jetzt das Länderkürzel und bekommt den vollständigen Ländernamen
    const landName = countryCodes[countryCode];
    console.log(landName);

    if (landName) {
      // Navigiere zur Länderseite mit dem vollen Ländernamen in der URL
      navigate(`/land/${landName}`);
    } else {
      console.error("Länderkürzel nicht gefunden");
    }
  };

  return (
    <div>
      <h1>Willkommen im PageManager!</h1>
      {/* Beispielhafte Länderkürzel, die die Länderseite aufrufen */}
      <button onClick={() => goToLandseite("DE")}>Gehe zu Deutschland</button>
      <button onClick={() => goToLandseite("FR")}>Gehe zu Frankreich</button>
      <button onClick={() => goToLandseite("US")}>Gehe zu den USA</button>
      <button onClick={() => goToLandseite("ES")}>Gehe zu Spanien</button>
      <button onClick={() => goToLandseite("IT")}>Gehe zu Italien</button>
      {/* Hier können noch viele weitere Buttons für andere Länder hinzugefügt werden */}
    </div>
  );
};

export default PageManager;
