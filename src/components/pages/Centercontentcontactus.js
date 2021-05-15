import React from "react";
import "./Centercontentcontactus.css";
import Socialmedia from "./Socialmedia";
import { Link } from "react-router-dom";
import image1 from "./countryside.jpg";

function Centercontentcontactus() {
  return (
    <div className="contact__center">
      <div className="contact__feed">
        <p>
          If you have any questions or comments, please let us know. We look
          forward to hearing from you.
        </p>
      </div>
      <div className="contact__people">
        <div className="contact__pic">
          <img src={image1} alt="" />
        </div>
        <div className="contact__imgtext">
          President
          <br />
          Peter Roaf
          <br />
          proaf@shaw.ca
          <br />
          604-839-1465
        </div>
      </div>
      <div className="contact__people">
        <div className="contact__pic">
          <img src={image1} alt="" />
        </div>
        <div className="contact__imgtext">
          Membership Chair
          <br />
          Lynn Cameron
          <br />
          lynncameron@dccnet.com
          <br />
          604-839-1465
        </div>
      </div>
      <div className="contact__people">
        <div className="contact__pic"></div>
        <div className="contact__text">
          <p>Club Mailing address</p>
          Rotary Club of Ladner
          <br />
          PO Box 77
          <br />
          Delta BC V4K 3N5
        </div>
      </div>
      <div className="contact__people">
        <div className="contact__pic"></div>
        <div className="contact__text">
          <p>Meeting Location</p>
          <br />
          Tuesday 12:05 PM
          <br />
          Coast Tsawwassen Inn
          <br />
          1665 – 56th Street
          <br />
          Delta, BC V4L 2B2
          <br />
          Canada
          <br />
          tsawwasseninn.com
        </div>
      </div>
      <div className="contactcontentlinks__bottom">
        <br />
        <h3>Our International Network Links</h3>
        <p>
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Rotary International
          </Link>
          <br />
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            RI President Home
          </Link>
          <br />
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            About Rotary
          </Link>
          <br />
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Rotary History
          </Link>
          <br />
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Rotary Foundation
          </Link>
          <br />
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Rotary Foundation
          </Link>
          <br />
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Joining Rotary
          </Link>
          <br />
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            For New Members
          </Link>
          <br />
        </p>
      </div>
      <div className="contactsocialmedia__icons">
        <h1>Follow us on</h1>
        <Socialmedia />
      </div>
    </div>
  );
}

export default Centercontentcontactus;
