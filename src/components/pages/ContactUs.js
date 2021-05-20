import React from "react";
import Centercontentcontactus from "./Centercontentcontactus";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contactus__contact">
      <div className="contactus__heading">
        <h1>Get in touch with us</h1>
      </div>
      <div className="contactus__contentbody">
        <Centercontentcontactus />
      </div>
    </div>
  );
}
