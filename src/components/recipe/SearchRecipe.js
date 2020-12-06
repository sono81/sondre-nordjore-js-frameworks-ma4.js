import React from "react";
import PropTypes from "prop-types";

export default function SearchRecipe({ handleSearch }) {
  return (
    <div className="search">
      <input
        className="search--bar"
        placeholder="Search recipe..."
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

SearchRecipe.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
