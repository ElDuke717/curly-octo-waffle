import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          Eeko Environmental
        </a>
        <ul className="nav-menu">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#order">Order</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
