import React from "react";
import "./ProjectandPartners.css";
import CentercontentprojectandPartners from "./CentercontentprojectandPartners";
import SidebarcontentprojectandPartners from "./SidebarcontentprojectandPartners";

export default function ProjectandPartners() {
  return (
    <div className="projectandPartners">
      <div className="projectandPartners__heading">
        <h1>Project and Partners for Kaimosi Kenya Rotary Club</h1>
      </div>
      <div className="projectandPartners__contentbody">
        <SidebarcontentprojectandPartners />
        <CentercontentprojectandPartners />
      </div>
    </div>
  );
}
