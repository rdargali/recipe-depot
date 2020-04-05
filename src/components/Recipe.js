import React from "react";
import "../App.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe-container">
      <h1>{title}</h1>
      <p>Calories: {calories}</p>
      <img src={image} alt={title} />
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
