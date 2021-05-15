import React from "react";
import "./Whatdoesrotarydo.css";
import Centercontentwhatdoesrotarydo from "./Centercontentwhatdoesrotarydo";
import Sidebarcontentwhatdoesrotarydo from "./Sidebarcontentwhatdoesrotarydo";

export default function Whatdoesrotarydo() {
  return (
    <div className="Whatdoesrotarydo">
      <div className="headinhg__Watdoesrotarydo">
        <h1>RELATED PAGE</h1>
      </div>
      <div className="contentbody__Whatdoesrotarydo">
        <Sidebarcontentwhatdoesrotarydo />
        <Centercontentwhatdoesrotarydo />
        <Sidebarcontentwhatdoesrotarydo />
      </div>
    </div>
  );
}
