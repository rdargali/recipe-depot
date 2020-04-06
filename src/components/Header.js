import React from "react";

const Header = (props) => {
  return (
    <div className="header-container">
      <h1>Welcome to Recipe Depot</h1>
      {props.children}
      <h4>{props.directions}</h4>
    </div>
  );
};

export default Header;
