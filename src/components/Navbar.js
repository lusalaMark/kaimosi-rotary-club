import React, { useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
<<<<<<< HEAD
            KAIMOSI KENYA ROTARY CLUB
=======
<<<<<<< HEAD
            KAIMOSI KENYA ROTARY CLUB
=======
            KAIMOSI ROTARY CLUB
>>>>>>> 67367879687a409480ec139f3c9f57d558bca8b8
>>>>>>> 75092581f78fb7497b59c077c01af56b71ff23f5
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/project-and-partners"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Project and Partners
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/membership"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Membership
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/project-selection"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Project Selection
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
