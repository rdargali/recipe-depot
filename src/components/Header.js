import React from "react";

const Header = ({ query, recipes, children }) => {
  let directions = "";

  if (recipes.length === 0 && query.length === 0) {
    directions = `Use the search bar to begin!`;
  } else if (recipes.length === 0 && query.length > 0) {
    directions = `Your search for "${query}" did not yield any results, please try again`;
  } else if (recipes.length > 0) {
    directions = "Click on the picture for the full recipe!";
  }

  return (
    <div className="header-container">
      <h1>Welcome to Recipe Depot</h1>
      {children}
      <h4>{directions}</h4>
    </div>
  );
};

export default Header;
