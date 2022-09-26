import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "#121212",
  };
  return (
    <header>
      <nav>
        <img className="logo" src={process.env.PUBLIC_URL + "planet.png"} />
        <h1>Space Traveler's Hub</h1>
      </nav>
      <ul className="nav-menu">
        <li>
          <Link style={linkStyle} to="/">
            Rockets
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/missions">
            Missions
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
