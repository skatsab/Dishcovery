
import React from "react";

const ShoppingList = () => {
  return (
    <div className="page-container">
      <h1>Create Your Shopping List</h1>
      <form className="form-container">
        <input type="text" placeholder="Enter item..." />
        <input type="text" placeholder="Enter item..." />
        <input type="text" placeholder="Enter item..." />
        <input type="text" placeholder="Enter item..." />
        <button type="submit">Save List</button>
      </form>
    </div>
  );
};

export default ShoppingList;
