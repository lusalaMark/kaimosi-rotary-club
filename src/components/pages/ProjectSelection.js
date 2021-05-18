import React from "react";
import "./ProjectSelection.css";
import CentercontentProjectSelection from "./CentercontentProjectSelection";
import SidebarcontentprojectSelection from "./SidebarcontentprojectSelection";

export default function ProjectSelection() {
  return (
    <div className="projectSelection">
      <div className="projectSelection__heading">
        <h1>Welcome</h1>
      </div>
      <div className="projectSelection__contentbody">
        <SidebarcontentprojectSelection />
        <CentercontentProjectSelection />
      </div>
    </div>
  );
}
