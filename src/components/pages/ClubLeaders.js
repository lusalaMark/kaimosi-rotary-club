import React from "react";
import "./ClubLeaders.css";
import Centercontentclubleaders from "./Centercontentclubleaders";
import Sidebarcontentclubleaders from "./Sidebarcontentclubleaders";

export default function Clubleaders() {
  return (
    <div className="clubleaders__rotary">
      <div className="clubleaders__heading">
        <h1>CLUB LEADERS</h1>
      </div>
      <div className="clubleaders__contentbody">
        <Sidebarcontentclubleaders />
        <Centercontentclubleaders />
      </div>
    </div>
  );
}
