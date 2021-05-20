import React from "react";
import Rightcontentwearerotary from "./Rightcontentwearerotary";
import Sidebarcontentwearerotary from "./Sidebarcontentwearerotary";
import Centercontentwearerotary from "./Centercontentwearerotary";
import "./WeareRotary.css";

export default function Wearerotary() {
  return (
    <div className="wearerotary">
      <div className="wearerotaryheading">
        <h1>WELCOME TO ROTARY</h1>
      </div>
      <div className="wearerotarycontent__body">
        <Sidebarcontentwearerotary />
        <Centercontentwearerotary />
        <Rightcontentwearerotary />
      </div>
    </div>
  );
}
