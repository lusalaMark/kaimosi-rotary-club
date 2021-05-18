import React from "react";
import Centercontentserviceprojects from "./Centercontentserviceprojects";
import Sidebarcontentserviceprojects from "./Sidebarcontentserviceprojects";
import "./Serviceprojects.css";

export default function Serviceprojects() {
  return (
    <div className="serviceproject">
      <div className="serviceproject__heading">
        <h1>SERVICE PROJECTS</h1>
      </div>
      <div className="serviceproject__contentbody">
        <Sidebarcontentserviceprojects />
        <Centercontentserviceprojects />
      </div>
    </div>
  );
}
