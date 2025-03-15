import React from "react";
import "../styles/CustomButton.css"; 
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text, path }) => {
  const navigate = useNavigate();

  return (
    <button className="custom-button" onClick={() => navigate(path)}>
      {text}
    </button>
  );
};

export default CustomButton;
