import React from "react";
import { Link } from "react-router-dom";
import "./Sidebarcontentclubleaders.css";

function Sidebarcontentclubleaders() {
  return (
    <div className="sidebarcontent">
      <div className="subpagesmain">
        <h3>Club Leaders</h3>
      </div>
      <div className="subpage">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Subpages</h3>
        </Link>
      </div>
      <div className="subpage">
        <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
          <h3>Club Leaders 2020-21</h3>
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

export default Sidebarcontentclubleaders;
