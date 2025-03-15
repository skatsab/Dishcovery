import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"; 

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-title">
        <img src="/logo512.png" alt="Logo" className="logo-image" />
        <h1 className="header-title">Dishcovery</h1>
      </div>

      <nav className="navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/länder" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>
          Länder
        </NavLink>
        <NavLink to="/rezept-hinzufuegen" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>
          Rezept erstellen
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
