import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  Email,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@material-ui/icons";

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
              Club Leaders of Rotary Club of Kaimosi-Kenya
            </Link>
            <Link to="/presidentofrotaryclubofkaimosi" onClick={scrollToTop}>
              President of Rotary Club of Kaimosi-Kenya
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
              History of Rotary Club of Kaimosi-Kenya
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Projects and Partners</h2>
            <Link to="/serviceprojects" onClick={scrollToTop}>
              Service projects of Rotary Club of Kaimosi-Kenya
            </Link>
            <Link to="/rotarysplashpark" onClick={scrollToTop}>
              Rotary Splash Park
            </Link>
            <Link to="/projectpartners" onClick={scrollToTop}>
              Project Partners of Rotary Club of Kaimosi-Kenya
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
              What does Rotary do?
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Events of Rotary Club of Kaimosi-Kenya</h2>
            <Link to="/clubevents" onClick={scrollToTop}>
              Club Events of Rotary Club of Kaimosi-Kenya
            </Link>
            <a href="https://rotary5040.org/events/calendar/" className="href">
              District Events of Rotary Club of Kaimosi-Kenya
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo" onClick={scrollToTop}>
              Kaimosi Kenya Rotary Club
            </Link>
          </div>
          <small class="website-rights">Kaimosi Kenya Rotary Club © 2021</small>
          <div class="social-icons">
            <div className="facebook">
              <a
                href="https://www.facebook.com/Kaimosi-Kenya-Rotary-Club-102804331863605/"
                className="href"
              >
                <Facebook />
              </a>
            </div>
            <div className="youtube">
              <a href="/" className="href">
                <YouTube />
              </a>
            </div>
            <div className="instagram">
              <a href="/" className="href">
                <Instagram />
              </a>
            </div>
            <div className="email">
              <a href="/" className="href">
                <Email />
              </a>
            </div>
            <div className="twitter">
              <a href="/" className="href">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
