import React from "react";
import { useState } from "react";
import "./product.css";
export default function Product(props) {
  function selectSize() {}
  const [size, setSize] = useState("");

  const handleSizeClick = (selectedSize) => {
    setSize(selectedSize);
  };
  return (
    <div className="container">
      <div className="Product">
        <div className="Information">
          <h1>{props.name}</h1>
          <h3>{props.price}$</h3>
          <div className="SelectSize">
            <button
              onClick={() => handleSizeClick("S")}
              style={{
                border: size === "S" ? "1px solid red" : "1px solid #fff",
              }}
            >
              S
            </button>
            <button
              onClick={() => handleSizeClick("M")}
              style={{
                border: size === "M" ? "1px solid red" : "1px solid #fff",
              }}
            >
              M
            </button>
            <button
              onClick={() => handleSizeClick("L")}
              style={{
                border: size === "L" ? "1px solid red" : "1px solid #fff",
              }}
            >
              L
            </button>
            <button
              onClick={() => handleSizeClick("XL")}
              style={{
                border: size === "XL" ? "1px solid red" : "1px solid #fff",
              }}
            >
              XL
            </button>
          </div>
          <button className="Rendel">Rendel</button>
        </div>
        <div className="ProductImg">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}
