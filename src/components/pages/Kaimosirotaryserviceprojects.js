import React from "react";
import Sidebarcontentkaimosirotaryserviceprojects from "./Sidebarcontentkaimosirotaryserviceprojects";
import Centercontentkaimosirotaryserviceprojects from "./Centercontentkaimosirotaryserviceprojects";

export default function Kaimosirotaryserviceprojects() {
  return (
    <div className="contact">
      <div className="heading">
        <h1>SERVICE PROJECTS</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentkaimosirotaryserviceprojects />
        <Centercontentkaimosirotaryserviceprojects />
      </div>
    </div>
  );
}
