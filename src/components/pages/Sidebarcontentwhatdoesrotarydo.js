import React from "react";
import { Link } from "react-router-dom";
import "./Sidebarcontentwhatdoesrotarydo.css";

function Sidebarcontentwhatdoesrotarydo() {
  return (
    <div className="sidebar__content">
      <div className="subpagesmain">
        <h3>SERVICE PROJECTS</h3>
      </div>
      <div className="subpage">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Subpas</h3>
        </Link>
      </div>
      <div className="subpage">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Service Projects</h3>
        </Link>
      </div>
      <div className="subpage">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Adopt-A-Village Laos</h3>
        </Link>
      </div>
      <div className="subpage">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Related Pages</h3>
        </Link>
      </div>
      <div className="subpage">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Links</h3>
        </Link>
      </div>
      <div className="subpage">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Files</h3>
        </Link>
      </div>
      <div className="subpagee">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Photo Albums</h3>
        </Link>
      </div>
    </div>
  );
}

export default Sidebarcontentwhatdoesrotarydo;
