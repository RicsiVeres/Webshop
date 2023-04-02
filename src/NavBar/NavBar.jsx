import React from "react";
import "./NavBar.css"
import { Component } from 'react';
export default function NavBar() {
  return (
    
    <div>
      <nav className="navbar">
      <button><a href="">Pólók</a></button> 
      <button><a href="">Nadrágok</a></button> 
      <button><a href="">Pulcsik</a></button> 
      <button><a href="">Kabátok</a></button> 
      <button><a href="">Trikók</a></button>      
    </nav>
    
    <nav className="mobilenavbar">
      
    </nav>
    </div>
  );
}