import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import navlogo from "../assets/truekeeper-assets/real-logo.png"
import "../styles/Navbar.css";
import { yellow } from "@mui/material/colors";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link exact to="/" className="nav-logo">
        
        <h3> TrueKeepers <img src={navlogo} alt="img" /></h3>
          <p> ..closing the needs gap in Africa</p>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
            >
             ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/login"
              activeClassName="active"
              className="nav-links"
            >
              DONATE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/Projects"
              activeClassName="active"
              className="nav-links"
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
            >
              LOGIN
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
            >
              SIGN UP
            </Link>
          </li>
          <li className="nav-item" style={{ border: '1px solid yellow', borderRadius: 25  }} >
            <Link
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
            >
              DONATE NOW
            </Link>
          </li>
        </ul>
        
        {/* Updated icon element */}
        <div className="nav-icon" onClick={handleClick}>
          <HiOutlineMenu className={click ? "menu-icon active" : "menu-icon"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
