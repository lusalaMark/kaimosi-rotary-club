import React from "react";
import "./ProjectSelection.css";
import CentercontentProjectSelection from "./CentercontentProjectSelection";
import SidebarcontentprojectSelection from "./SidebarcontentprojectSelection";
import Rightbarcontentmembership from "./Rightbarcontentmembership";

export default function ProjectSelection() {
  return (
    <div className="projectSelection">
      <div className="projectSelection__heading">
        <h1>Welcome to Kaimosi-Kenya Rotary Club</h1>
      </div>
      <div className="projectSelection__contentbody">
        <SidebarcontentprojectSelection />
        <CentercontentProjectSelection />
        <Rightbarcontentmembership />
      </div>
    </div>
  );
}
