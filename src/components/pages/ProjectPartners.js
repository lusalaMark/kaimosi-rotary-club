import React from "react";
import Centercontentprojectpartners from "./Centercontentprojectpartners";
import Sidebarcontentprojectpartners from "./Sidebarcontentprojectpartners";

export default function ProjectPartners() {
  return (
    <div className="contact">
      <div className="heading">
        <h1>RELATED PAGES</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentprojectpartners />
        <Centercontentprojectpartners />
      </div>
    </div>
  );
}
