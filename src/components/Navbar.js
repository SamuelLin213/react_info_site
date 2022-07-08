/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"
import logo from "../images/react-icon-small.png"
import "../style.css";

export default function Navbar() {
    return (
      <nav>
          <div className="logo">
          <img src={logo}/>
          <h3 className="logoText">ReactFacts</h3>
          </div>
          <h4 className="navLink">React Course - Project 1</h4>
      </nav>
    )
}
