import React from "react";

import "../App.css";

const Recipe = ({ title, calories, image, ingredients, servings, url }) => {
  return (
    <div className="recipe-container">
      <h2>{title}</h2>
      <strong>Servings: {servings}</strong>
      <strong>Calories: {Math.round(calories)}</strong>
      <strong>Number of ingredients: {ingredients.length}</strong>

      <a href={url}>
        <img src={image} alt={title} />
      </a>
      {/* <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Recipe;
