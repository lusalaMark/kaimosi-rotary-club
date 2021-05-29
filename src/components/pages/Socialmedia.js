import {
  Email,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import "./Socialmedia.css";

function Socialmedia() {
  return (
    <div className="socialmedia__links">
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
        <a href="https://kaimosirotary@gmail.com" className="href">
          <Email />
        </a>
      </div>
      <div className="twitter">
        <a href="/" className="href">
          <Twitter />
        </a>
      </div>
    </div>
  );
}

export default Socialmedia;
