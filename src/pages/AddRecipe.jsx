
import React from "react";

const AddRecipe = () => {
  return (
    <div className="page-container">
      <h1>Add a New Recipe</h1>
      <form className="form-container">
        <input type="text" placeholder="Recipe Name" />
        <textarea placeholder="Ingredients (comma-separated)" />
        <textarea placeholder="Preparation steps" />
        <button type="submit">Save Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
