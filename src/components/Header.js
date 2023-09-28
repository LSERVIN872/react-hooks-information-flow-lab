import React from "react";


function Header({ onDarkModeClick , darkMode}) {
    return (
      <header>
        <h1>My App</h1>
        <button onClick={onDarkModeClick}>{darkMode ? "dark Mode" : "light Mode"}</button>
      </header>
    );
  }

export default Header