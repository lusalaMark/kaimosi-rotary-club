import React from "react";
import Centercontentrotarysplashpark from "./Centercontentrotarysplashpark";
import Sidebarcontentrotarysplashpark from "./Sidebarcontentrotarysplashpark";

export default function Rotarysplashpark() {
  return (
    <div className="contact">
      <div className="heading">
        <h1>RELATED PAGE</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentrotarysplashpark />
        <Centercontentrotarysplashpark />
      </div>
    </div>
  );
}
