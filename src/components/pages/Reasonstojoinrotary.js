import React from "react";
import "./Reasonstojoinrotary.css";
import Sidebarcontentreasonstojoinrotary from "./Sidebarcontentreasonstojoinrotary";
import Centercontentreasonstojoinrotary from "./Centercontentreasonstojoinrotary";

export default function ProjectPartners() {
  return (
    <div className="contact">
      <div className="heading">
        <h1>Reasons to join Rotary Club of Kaimosi</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentreasonstojoinrotary />
        <Centercontentreasonstojoinrotary />
      </div>
    </div>
  );
}
