import React from "react";

import "./App.css";

const App = () => {
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;
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
