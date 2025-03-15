
import React from "react";

const Calories = () => {
  return (
    <div className="page-container">
      <h1>Track Your Calories</h1>
      <form className="form-container">
        <input type="text" placeholder="Meal Name" />
        <input type="number" placeholder="Calories" />
        <input type="number" placeholder="Proteins (g)" />
        <input type="number" placeholder="Carbs (g)" />
        <input type="number" placeholder="Fats (g)" />
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

export default Calories;