import React from "react";
import IngredientList from "./IngredientList";
import PropTypes from "prop-types";

function RecipeItem({ title, thumbnail, ingredients }) {
  return (
    <div className="card">
      <img className="card--image" src={thumbnail} alt="Description" />
      <div className="card--body">
        <div className="card--title">{title}</div>
        <IngredientList ingredients={ingredients} />
      </div>
    </div>
  );
}

RecipeItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default RecipeItem;
