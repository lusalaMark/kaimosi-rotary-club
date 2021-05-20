import React from "react";
import Centercontentclubevents from "./Centercontentclubevents";
import "./ClubEvents.css";
import "./PresidentofrotaryclubofKaimosi.css";
import SidebarcontentpresidentofrotaryclubofKaimosi from "./SidebarcontentpresidentofrotaryclubofKaimosi";

export default function PresidentofrotaryclubofKaimosi() {
  return (
    <div className="clubEvents__contact">
      <div className="clubEvents__heading">
        <h1>CALENDAR</h1>
      </div>
      <div className="clubEvents__contentbody">
        <SidebarcontentpresidentofrotaryclubofKaimosi />
        <Centercontentclubevents />
      </div>
    </div>
  );
}
