import React from "react";
import "../style/header.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <h1 className="logo">
          <a href="/" id="logo">
            Logo
          </a>
        </h1>
        <ul className="nav_menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
