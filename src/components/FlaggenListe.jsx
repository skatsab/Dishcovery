import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FlaggenListe.css"; 

const flaggenDaten = [
  { land: "Italien", imageSrc: "/images/italien.png" },
  { land: "Syrien", imageSrc: "/images/syrien.png" },
  { land: "Deutschland", imageSrc: "/images/deutschland.png" }
];

const FlaggenListe = () => {
  const navigate = useNavigate();

  const handleFlagClick = (land) => {
    navigate(`/land/${land}`);
  };

  return (
    <div className="flaggen-liste">
      {flaggenDaten.map((flag, index) => (
        <div key={index} className="flagge-container" onClick={() => handleFlagClick(flag.land)}>
          <img src={flag.imageSrc} alt={`${flag.land} Flagge`} className="flagge" />
          <p>{flag.land}</p>
        </div>
      ))}
    </div>
  );
};

export default FlaggenListe;
