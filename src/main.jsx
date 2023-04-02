import React from "react";
import ReactDOM from "react-dom/client";
import Product from "./Products/product";
import logo from "./Products/T.png";

import "./main.css";
import NavBar from "./NavBar/NavBar";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <NavBar />
    <div className="container">
      <div id="d">
        <Product price="15" name="Product" img={logo} />
        <Product price="100" name="Product" img={logo} />
        <Product price="10" name="Product" img={logo} />
        <Product price="10" name="Product" img={logo} />
        <Product price="10" name="Product" img={logo} />
        <Product price="10" name="Product" img={logo} />
        <Product price="10" name="Product" img={logo} />
        <Product price="10" name="Product" img={logo} />
        <Product price="10" name="Product" img={logo} />
      </div>
    </div>
  </div>
);
