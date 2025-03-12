import { Link, NavLink } from "react-router-dom";
import React from "react";
import "../styles/Navigation.css"; 

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
      >
        Home
      </NavLink>
      <NavLink 
        to="/länder" 
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
      >
        Länder
      </NavLink>
      <NavLink 
        to="/rezept-hinzufuegen" 
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
      >
        Rezept erstellen
      </NavLink>
    </nav>
  );
};

export default Navigation;