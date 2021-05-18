import React from "react";
<<<<<<< HEAD
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
=======
import Centercontentprojectpartners from "./Centercontentprojectpartners";
import Sidebarcontentprojectpartners from "./Sidebarcontentprojectpartners";

export default function ProjectPartners() {
  return (
    <div className="contact">
      <div className="heading">
        <h1>RELATED PAGES</h1>
      </div>
      <div className="content__body">
>>>>>>> 67367879687a409480ec139f3c9f57d558bca8b8
        <Sidebarcontentprojectpartners />
        <Centercontentprojectpartners />
      </div>
    </div>
  );
}
