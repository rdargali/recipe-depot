import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import Header from "./components/Header";
import axios from "axios";

import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, SetSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [directions, setDirections] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    await axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
      )
      .then((response) => setRecipes(response.data.hits));
  };

  const handleSearch = (e) => {
    SetSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();

    setQuery(search);

    SetSearch("");
    setDirections("Click on the picture for the full recipe");
  };

  return (
    <div className="App">
      <Header directions={directions}>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="To start, simply enter some keywords for a recipe"
            onChange={handleSearch}
          />
          <br />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </Header>
      <div className="recipe-app-container">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
