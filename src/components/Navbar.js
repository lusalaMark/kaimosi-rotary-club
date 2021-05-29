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
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            KAIMOSI-KENYA ROTARY CLUB
          </Link>
          <div className="menu__icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav__menu active" : "nav__menu"}>
            <li className="nav-item">
              <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/about-us"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/project-and-partners"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Project Partners
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/membership"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Membership
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/project-selection"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Project Selection
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/events"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contact-us"
                className="nav__links"
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
