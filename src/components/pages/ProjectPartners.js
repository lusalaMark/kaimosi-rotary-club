import React from "react";
import "./ProjectPartners.css";
import Sidebarcontentprojectpartners from "./Sidebarcontentprojectpartners";
import Centercontentprojectpartners from "./Centercontentprojectpartners";

export default function ProjectPartners() {
  return (
    <div className="ProjectPartners__contact">
      <div className="ProjectPartners__heading">
        <h1>RELATED PAGE</h1>
      </div>
      <div className="ProjectPartners__contentbody">
        <Sidebarcontentprojectpartners />
        <Centercontentprojectpartners />
      </div>
    </div>
  );
}
