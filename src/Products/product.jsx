import React from "react";
import "./product.css";
import logo from "./T.png";
export default function Product() {
  return (
    <div className="container">
      <div className="Product">
        <div className="Information">
          <h1>Product Name</h1>
          <h3>10$</h3>
          <p>
            <a>S</a>
            <a className="Selected">M</a>
            <a>L</a>
            <a>XL</a>
          </p>
          <button className="Rendel">Rendel</button>
        </div>
        <div className="ProductImg">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
