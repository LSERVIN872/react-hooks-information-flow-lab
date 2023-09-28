import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark' : 'App light'}>
      <Header onDarkModeClick={handleDarkModeClick} 
      darkMode= {darkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App