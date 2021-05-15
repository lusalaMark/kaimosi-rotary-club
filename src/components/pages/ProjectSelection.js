import React from "react";
import CentercontentProjectSelection from "./CentercontentProjectSelection";
import "./ProjectSelection.css";
import SidebarcontentprojectSelection from "./SidebarcontentprojectSelection";

export default function ProjectSelection() {
  return (
    <div className="ProjectSelection">
      <div className="heading">
        <h1>Welcome</h1>
      </div>
      <div className="content__body">
        <SidebarcontentprojectSelection />
        <CentercontentProjectSelection />
      </div>
    </div>
  );
}
