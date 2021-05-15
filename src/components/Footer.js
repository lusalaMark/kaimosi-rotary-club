import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/wearerotry" onClick={scrollToTop}>
              We are Rotary
            </Link>
            <Link to="/clubleaders" onClick={scrollToTop}>
              Club Leaders
            </Link>
            <Link to="/presidentofrotaryclubofkaimosi" onClick={scrollToTop}>
              President of rotary club of Kaimosi
            </Link>

            <a
              href="https://www.rotary.org/en/about-rotary/history"
              className="href"
            >
              History of Rotary club International
            </a>

            <Link to="/historyofrotaryclubinkenya" onClick={scrollToTop}>
              History of Rotary club in Kenya
            </Link>
            <Link to="/historyofrotaryclubofkaimosi" onClick={scrollToTop}>
              History of Rotary club of Kaimosi
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Projects and Partners</h2>
            <Link to="/serviceprojects" onClick={scrollToTop}>
              Service projects
            </Link>
            <Link to="/rotarysplashpark" onClick={scrollToTop}>
              Rotary Splash Park
            </Link>
            <Link to="/projectpartners" onClick={scrollToTop}>
              Project Partners
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper" onClick={scrollToTop}>
          <div class="footer-link-items" onClick={scrollToTop}>
            <h2>Membership</h2>
            <Link to="/reasonstojoinrotary" onClick={scrollToTop}>
              10 Reasons to join rotary
            </Link>
            <Link to="/kaimosirotaryserviceprojects" onClick={scrollToTop}>
              Kaimosi rotary service projects
            </Link>
            <Link to="/whatdoesrotarydo" onClick={scrollToTop}>
              What does rotary do?
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Events</h2>
            <Link to="/clubevents" onClick={scrollToTop}>
              Club Events
            </Link>
            <a href="https://rotary5040.org/events/calendar/" className="href">
              District Events
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo" onClick={scrollToTop}>
              Kaimosi Rotary Club
            </Link>
          </div>
          <small class="website-rights">Kaimosi Rotary Club © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
              onClick={scrollToTop}
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
              onClick={scrollToTop}
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
              onClick={scrollToTop}
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
              onClick={scrollToTop}
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
              onClick={scrollToTop}
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
