import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";
// import { FaUser } from "react-icons/fa";

function Header() {
  //   const linkStyle = {
  //     textDecoration: "none",
  //     color: "#121212",
  //   };
  return (
    <header>
      <nav>
        <img className="logo" src={process.env.PUBLIC_URL + "planet.png"} />
        <h1>Space Traveler's Hub</h1>
      </nav>
      <ul className="nav-menu">
        <li>
          {/* <Link style={linkStyle} to="/">
              BOOKS
            </Link> */}
          Rockets
        </li>
        <li>
          {/* <Link style={linkStyle} to="/Categories">
              CATEGORIES
            </Link> */}
          Missions
        </li>
      </ul>
    </header>
  );
}

export default Header;
