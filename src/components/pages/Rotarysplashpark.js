import React from "react";
import "./Rotarysplashpark.css";
import Centercontentrotarysplashpark from "./Centercontentrotarysplashpark";
import Sidebarcontentrotarysplashpark from "./Sidebarcontentrotarysplashpark";

export default function Rotarysplashpark() {
  return (
    <div className="Rotarysplashpark__contact">
      <div className="Rotarysplashpark__heading">
        <h1>RELATED PAGE</h1>
      </div>
      <div className="Rotarysplashpark__contentbody">
        <Sidebarcontentrotarysplashpark />
        <Centercontentrotarysplashpark />
      </div>
    </div>
  );
}
