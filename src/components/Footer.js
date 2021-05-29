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
    <div className="footer__container">
      <div class="footer__links">
        <div className="footerlink__wrapper">
          <div class="footerlink__items">
            <h2>About Us</h2>
            <Link to="/wearerotry" onClick={scrollToTop}>
              <h6>We are Rotary</h6>
            </Link>
            <Link to="/clubleaders" onClick={scrollToTop}>
              <h6>Club Leaders of Kaimosi-Kenya Rotary Club</h6>
            </Link>
            <Link to="/presidentofrotaryclubofkaimosi" onClick={scrollToTop}>
              <h6>President of Kaimosi-Kenya Rotary Club</h6>
            </Link>

            <Link to="/historyofrotaryclubofkaimosi" onClick={scrollToTop}>
              <h6>History of Kaimosi-Kenya Rotary Club</h6>
            </Link>
            <Link to="/historyofrotaryclubinkenya" onClick={scrollToTop}>
              <h6>History of Rotary Club in Kenya</h6>
            </Link>
            <a
              href="https://www.rotary.org/en/about-rotary/history"
              className="href"
            >
              <h6>History of Rotary club International</h6>
            </a>
          </div>
          <div class="footerlink__items">
            <h2>Projects and Partners</h2>
            <Link to="/serviceprojects" onClick={scrollToTop}>
              <h6>Service projects of Kaimosi-Kenya Rotary Club</h6>
            </Link>
            <Link to="/rotarysplashpark" onClick={scrollToTop}>
              <h6>Rotary Splash Park</h6>
            </Link>
            <Link to="/projectpartners" onClick={scrollToTop}>
              <h6>Project Partners of Kaimosi-Kenya Rotary Club</h6>
            </Link>
          </div>
        </div>

        <div className="footerlink__wrapper" onClick={scrollToTop}>
          <div class="footerlink__items" onClick={scrollToTop}>
            <h2>Membership</h2>
            <Link to="/reasonstojoinrotary" onClick={scrollToTop}>
              <h6>10 Reasons to join rotary Kaimosi-Kenya Rotary Club</h6>
            </Link>
            <Link to="/kaimosirotaryserviceprojects" onClick={scrollToTop}>
              <h6>Kaimosi-Kenya Rotary Club Service Projects</h6>
            </Link>
            <Link to="/whatdoesrotarydo" onClick={scrollToTop}>
              <h6>What does Rotary do?</h6>
            </Link>
          </div>
          <div class="footerlink__items">
            <h2>Events</h2>
            <Link to="/clubevents" onClick={scrollToTop}>
              <h6>Club Events of Kaimosi-Kenya Rotary Club</h6>
            </Link>
          </div>
        </div>
      </div>
      <section class="social__media">
        <div class="socialmedia__wrap">
          <div class="footer__logo">
            <Link to="/" className="social__logo" onClick={scrollToTop}>
              <h6>Kaimosi-Kenya Rotary Club</h6>
            </Link>
          </div>
          <small class="website__rights">
            Kaimosi-Kenya Rotary Club © 2021
          </small>
          <div class="social__icons">
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
