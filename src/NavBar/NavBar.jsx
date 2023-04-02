import React, { useState } from "react";
import "./NavBar.css";
import { Component } from "react";
export default function NavBar() {
  const [Login, SetLogin] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <button>
          <a href="">Pólók</a>
        </button>
        <button>
          <a href="">Nadrágok</a>
        </button>
        <button>
          <a href="">Pulcsik</a>
        </button>
        <button>
          <a href="">Kabátok</a>
        </button>
        <button>
          <a href="">Trikók</a>
        </button>
        <button>
          <a href="">{Login == false ? "Bejelentkezés" : "Kijelentkezés"}</a>
        </button>
      </nav>

      <nav className="mobilenavbar"></nav>
    </div>
  );
}
