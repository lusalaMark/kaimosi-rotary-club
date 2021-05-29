import React from "react";
import "./Membership.css";
import Centercontentmembership from "./Centercontentmembership";
import Sidebarcontentmembership from "./Sidebarcontentmembership";
import Rightbarcontentmembership from "./Rightbarcontentmembership";

export default function Membership() {
  return (
    <div className="membership">
      <div className="membership__heading">
        <h1>
          Join our beautiful team of Kaimosi-Kenya Rotary Club by filling this
          form
        </h1>
      </div>
      <div className="membership__contentbody">
        <Sidebarcontentmembership />
        <Centercontentmembership />
        <Rightbarcontentmembership />
      </div>
    </div>
  );
}
