import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Product from "./Products/product";
import "./main.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Home />
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
