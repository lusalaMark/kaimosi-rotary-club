import React from "react";
import "./Reasonstojoinrotary.css";
import Sidebarcontentreasonstojoinrotary from "./Sidebarcontentreasonstojoinrotary";
import Centercontentreasonstojoinrotary from "./Centercontentreasonstojoinrotary";

export default function Reasonstojoinrotary() {
  return (
    <div className="Reasonstojoinrotary__contact">
      <div className="Reasonstojoinrotary__heading">
        <h1>Reasons to join Kaimosi-Kenya Rotary Club</h1>
      </div>
      <div className="Reasonstojoinrotary__contentbody">
        <Sidebarcontentreasonstojoinrotary />
        <Centercontentreasonstojoinrotary />
      </div>
    </div>
  );
}
