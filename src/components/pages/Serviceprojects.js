import React from "react";
import Centercontentserviceprojects from "./Centercontentserviceprojects";
import Sidebarcontentserviceprojects from "./Sidebarcontentserviceprojects";
import "./Serviceprojects.css";

export default function Serviceprojects() {
  return (
<<<<<<< HEAD
    <div className="serviceproject">
      <div className="serviceproject__heading">
        <h1>SERVICE PROJECTS</h1>
      </div>
      <div className="serviceproject__contentbody">
=======
    <div className="service">
      <div className="spheading">
        <h1>SERVICE PROJECTS</h1>
      </div>
      <div className="spcontent__body">
>>>>>>> 67367879687a409480ec139f3c9f57d558bca8b8
        <Sidebarcontentserviceprojects />
        <Centercontentserviceprojects />
      </div>
    </div>
  );
}
