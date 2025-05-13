import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Nathanael Bernike</h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
