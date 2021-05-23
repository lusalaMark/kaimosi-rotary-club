import React from "react";
import "./Membership.css";
import Centercontentmembership from "./Centercontentmembership";
import Sidebarcontentmembership from "./Sidebarcontentmembership";

export default function Membership() {
  return (
    <div className="membership">
      <div className="membership__heading">
        <h1>
          Fill this Membership form to become a member of The Rotary Club of
          Kaimosi
        </h1>
      </div>
      <div className="membership__contentbody">
        <Sidebarcontentmembership />
        <Centercontentmembership />
      </div>
    </div>
  );
}
