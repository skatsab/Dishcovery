// src/pages/Weekplan.jsx
import React from "react";

const Weekplan = () => {
  return (
    <div className="page-container">
      <h1>Plan Your Week</h1>
      <form className="form-container">
        <input type="text" placeholder="Meal for Monday" />
        <input type="text" placeholder="Meal for Tuesday" />
        <input type="text" placeholder="Meal for Wednesday" />
        <input type="text" placeholder="Meal for Thursday" />
        <input type="text" placeholder="Meal for Friday" />
        <input type="text" placeholder="Meal for Saturday" />
        <input type="text" placeholder="Meal for Sunday" />
        <button type="submit">Save Plan</button>
      </form>
    </div>
  );
};

export default Weekplan;
