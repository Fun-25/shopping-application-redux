import React from "react";
import Home from "./Components/Home";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <nav className="nav">
        <p className="shopping-cart">Shopping cart</p>
        <a href="/" alt="home">
          Home Page
        </a>
        <a href="/" alt="cart">
          Cart Page
        </a>
      </nav>
      <Home />
    </div>
  );
};

export default App;
