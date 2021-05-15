import React from "react";
import Centercontentclubevents from "./Centercontentclubevents";
import "./PresidentofrotaryclubofKaimosi.css";
import SidebarcontentpresidentofrotaryclubofKaimosi from "./SidebarcontentpresidentofrotaryclubofKaimosi";

export default function PresidentofrotaryclubofKaimosi() {
  return (
    <div className="contact">
      <div className="heading">
        <h1>CALENDAR</h1>
      </div>
      <div className="content__body">
        <SidebarcontentpresidentofrotaryclubofKaimosi />
        <Centercontentclubevents />
      </div>
    </div>
  );
}
