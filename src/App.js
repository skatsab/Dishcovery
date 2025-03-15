import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landseite from "./pages/Landseite";
import RezeptDetail from "./pages/RezeptDetail";
import Header from "./components/Header";
import AddRecipe from "./pages/AddRecipe";
import Weekplan from "./pages/Weekplan";
import Calories from "./pages/Calories";
import ShoppingList from "./pages/ShoppingList";
import "./styles/PageStyles.css";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/land/:land" element={<Landseite />} />
        <Route path="/rezept/:id" element={<RezeptDetail />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/weekplan" element={<Weekplan />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
      </Routes>
   </Router>
 );
}

export default App;
