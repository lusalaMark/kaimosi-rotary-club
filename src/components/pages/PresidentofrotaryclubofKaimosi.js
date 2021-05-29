import React from "react";
import "./PresidentofrotaryclubofKaimosi.css";
import SidebarcontentpresidentofrotaryclubofKaimosi from "./SidebarcontentpresidentofrotaryclubofKaimosi";
import CentercontentpresidentofrotaryclubofKaimosi from "./CentercontentpresidentofrotaryclubofKaimosi";

export default function PresidentofrotaryclubofKaimosi() {
  return (
    <div className="PresidentofrotaryclubofKaimosi__contact">
      <div className="PresidentofrotaryclubofKaimosi__heading">
        <h1>Past Presidents of Kaimosi-Kenya Rotary Club</h1>
      </div>
      <div className="PresidentofrotaryclubofKaimosi__contentbody">
        <SidebarcontentpresidentofrotaryclubofKaimosi />
        <CentercontentpresidentofrotaryclubofKaimosi />
      </div>
    </div>
  );
}
