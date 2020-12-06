import React from "react";

function IngredientList({ ingredients }) {
  const ingredientsArray = ingredients.split(",").map(String);

  return (
    <ul className="card--text">
      {ingredientsArray.map(function (ing, id) {
        return <li key={id}>{ing}</li>;
      })}
    </ul>
  );
}

export default IngredientList;
