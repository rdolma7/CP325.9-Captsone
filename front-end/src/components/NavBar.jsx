import React from "react";
import "../NavBar.css";
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navbar-left"></div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/journal">Journal Entry</Link>
          </li>
          <li>
            <Link to="/unwind">Unwind</Link>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
