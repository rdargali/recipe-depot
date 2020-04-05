import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import axios from "axios";

import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, SetSearch] = useState("");
  const [query, setQuery] = useState("chicken");

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
      <form className="searchForm" onSubmit={getSearch}>
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="searchButton " type="submit">
          Search
        </button>
      </form>
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
  );
};

export default App;
