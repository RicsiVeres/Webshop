import React, { useState } from "react";

function App() {
  const [size, setSize] = useState("");

  const handleSizeClick = (selectedSize) => {
    setSize(selectedSize);
  };

  return (
    <div>
      <h2>Válassza ki a méretet:</h2>
      <button
        onClick={() => handleSizeClick("S")}
        style={{ border: size === "S" ? "1px solid red" : "none" }}
      >
        S
      </button>
      <button
        onClick={() => handleSizeClick("M")}
        style={{ border: size === "M" ? "1px solid red" : "none" }}
      >
        M
      </button>
      <button
        onClick={() => handleSizeClick("L")}
        style={{ border: size === "L" ? "2px solid red" : "none" }}
      >
        L
      </button>
      <button
        onClick={() => handleSizeClick("XL")}
        style={{ border: size === "XL" ? "2px solid red" : "none" }}
      >
        XL
      </button>
      {size && <p>Kiválasztott méret: {size}</p>}
    </div>
  );
}

export default App;
