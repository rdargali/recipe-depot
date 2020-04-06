import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import Header from "./components/Header";
import axios from "axios";

import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, SetSearch] = useState("");
  const [query, setQuery] = useState("");

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
  };

  return (
    <div className="App">
      <Header recipes={recipes} query={query}>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="Enter some keywords for a recipe"
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
            key={recipe.recipe.uri}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            servings={recipe.recipe.yield}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
