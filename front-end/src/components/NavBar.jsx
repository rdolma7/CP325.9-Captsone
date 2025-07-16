import React from "react";
import '../NavBar.css'

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navbar-left">
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/journal">Journal Entry</a>
          </li>
          <li>
            <a href="/unwind">Unwind</a>
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
