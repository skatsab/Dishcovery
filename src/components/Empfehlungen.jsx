import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; 
import "../styles/Empfehlungen.css";

const empfehlungenRezepte = [
  { id: 1, name: "Tiramisu", image: "/images/tiramisu.jpg", rating: 4.5 },
  { id: 2, name: "Mujadara", image: "/images/mujadara.jpg", rating: 5 },
  { id: 3, name: "Schwarzwälder Kirschtorte", image: "/images/schwarzwaelder.jpeg", rating: 4.2 }
];


const Bewertungen = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} color="gold" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaStarHalfAlt key={i} color="gold" />);
    } else {
      stars.push(<FaRegStar key={i} color="gold" />);
    }
  }
  return <div style={{ display: "flex", justifyContent: "center", gap: "2px", marginTop: "5px" }}>{stars}</div>;
};

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
            <Bewertungen rating={rezept.rating} /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Empfehlungen;
