import React from "react";
import "../NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
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
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/entries">All Entries</Link>
          </li>
        </ul>
      </div>
  );
}

export default NavBar;
