import React from "react";
import "./ContactUs.css";
import Centercontentcontactus from "./Centercontentcontactus";
import Sidebarcontentcontactus from "./Sidebarcontentcontactus";

export default function ContactUs() {
  return (
    <div className="contactus">
      <div className="contactus__heading">
        <h1>Leave us a message </h1>
      </div>
      <div className="contactus__contentbody">
        <Sidebarcontentcontactus />
        <Centercontentcontactus />
      </div>
    </div>
  );
}
