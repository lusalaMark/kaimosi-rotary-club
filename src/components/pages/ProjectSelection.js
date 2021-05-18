import React from "react";
<<<<<<< HEAD
import "./ProjectSelection.css";
import CentercontentProjectSelection from "./CentercontentProjectSelection";
=======
import CentercontentProjectSelection from "./CentercontentProjectSelection";
import "./ProjectSelection.css";
>>>>>>> 67367879687a409480ec139f3c9f57d558bca8b8
import SidebarcontentprojectSelection from "./SidebarcontentprojectSelection";

export default function ProjectSelection() {
  return (
<<<<<<< HEAD
    <div className="projectSelection">
      <div className="projectSelection__heading">
        <h1>Welcome</h1>
      </div>
      <div className="projectSelection__contentbody">
=======
    <div className="ProjectSelection">
      <div className="heading">
        <h1>Welcome</h1>
      </div>
      <div className="content__body">
>>>>>>> 67367879687a409480ec139f3c9f57d558bca8b8
        <SidebarcontentprojectSelection />
        <CentercontentProjectSelection />
      </div>
    </div>
  );
}
