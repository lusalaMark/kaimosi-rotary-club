import React from "react";
import "./Kaimosirotaryserviceprojects.css";

import Sidebarcontentkaimosirotaryserviceprojects from "./Sidebarcontentkaimosirotaryserviceprojects";
import Centercontentkaimosirotaryserviceprojects from "./Centercontentkaimosirotaryserviceprojects";

export default function Kaimosirotaryserviceprojects() {
  return (
    <div className="Kaimosirotaryserviceprojects__contact">
      <div className="Kaimosirotaryserviceprojects__heading">
        <h1>SERVICE PROJECTS</h1>
      </div>
      <div className="Kaimosirotaryserviceprojects__contentbody">
        <Sidebarcontentkaimosirotaryserviceprojects />
        <Centercontentkaimosirotaryserviceprojects />
      </div>
    </div>
  );
}
