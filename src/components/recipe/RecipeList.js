import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import RecipeItem from "./RecipeItem";
import SearchRecipe from "./SearchRecipe";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        setRecipes(json.results);
        setFilteredRecipes(json.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterRecipes = function (event) {
    const lowercaseSearch = event.target.value.toLowerCase();

    const filterArray = recipes.filter(function (res) {
      const lowercaseName = res.title.toLowerCase();
      if (lowercaseName.startsWith(lowercaseSearch)) {
        return true;
      }
      return false;
    });

    setFilteredRecipes(filterArray);
  };

  return (
    <>
      <SearchRecipe handleSearch={filterRecipes} />
      {filteredRecipes.map((recipe, i) => {
        const { title, thumbnail, ingredients } = recipe;

        return (
          <React.Fragment key={i}>
            <RecipeItem
              title={title}
              thumbnail={thumbnail}
              ingredients={ingredients}
              key={i}
            />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default RecipeList;
