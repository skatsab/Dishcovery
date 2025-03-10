

import { useNavigate } from "react-router-dom";
import "../styles/Flagge.css";

const Flagge = ({ land, imageSrc }) => {
  const navigate = useNavigate();

  return (
    <div className="flagge-container" onClick={() => navigate(`/land/${land}`)}>
      <img src={imageSrc} alt={`${land} Flagge`} className="flagge" />
      <p>{land}</p>
    </div>
  );
};

export default Flagge;
