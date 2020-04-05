import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_API_ID);
  });

  const getRecipes = async () => {
    await axios
      .get(
        `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => console.log(response.data));
  };

  return (
    <div className="App">
      <form className="searchForm">
        <input className="searchBar" type="text" />
        <button className="searchButton " type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
