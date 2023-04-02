import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Product from "./Products/product";
import "./main.css";
import NavBar from "./NavBar/NavBar"
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <NavBar />
    <div className="container">
      <div id="d">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  </div>
);
