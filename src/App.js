import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Landseite from "./pages/Landseite";
import RezeptDetail from "./pages/RezeptDetail";

function App() {
  return (
    <Router>
      <div className="header-container" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div className="logo-title">
       <img src="/logo512.png" alt="Logo" className="logo-image" />
      </div>
      <Navigation/>
      </div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/land/:land" element={<Landseite />} />
       <Route path="/rezept/:id" element={<RezeptDetail />} />
     </Routes>
   </Router>
 );
}

export default App;
