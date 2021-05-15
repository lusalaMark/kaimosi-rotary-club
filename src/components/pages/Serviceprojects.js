import React from "react";
import Centercontentserviceprojects from "./Centercontentserviceprojects";
import Sidebarcontentserviceprojects from "./Sidebarcontentserviceprojects";
import "./Serviceprojects.css";

export default function Serviceprojects() {
  return (
    <div className="service">
      <div className="spheading">
        <h1>SERVICE PROJECTS</h1>
      </div>
      <div className="spcontent__body">
        <Sidebarcontentserviceprojects />
        <Centercontentserviceprojects />
      </div>
    </div>
  );
}
