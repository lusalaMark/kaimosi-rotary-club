import React from "react";
import "./Centercontentclubleaders.css";
import Socialmedia from "./Socialmedia";

function Centercontentclubleaders() {
  return (
    <div className="content__center">
      <div className="content__cen">
        <div className="feed">
          <p>
            <h3>President</h3>
            <p>Peter Roaf</p>
            <br />
            <h3>President Elect</h3>
            <p>Ann Waldo</p> <br />
            <h3>Secretary</h3>
            <p>Mike Storey</p> <br />
            <h3>Treasurer</h3>
            <p>Tammy Hansen</p> <br />
            <h3>Immediate Past President</h3>
            <p>Bridget Jacob </p> <br />
            <h3>Local Community Projects</h3>
            <p>Robert Silvester</p> <br />
            <h3>Service</h3>
            <p>Guillermo Bustos</p>
            <br />
            <h3>Membership</h3>
            <p>Lynn Cameron</p>
            <br />
            <h3>Fundraising</h3>
            <p>Richard Shantz</p>
            <br />
            <h3>Rotary Foundation</h3>
            <p>Walt Hayward</p>
            <br />
            <h3>PR Chair/Webmaster</h3>
            <p>Peter Roaf</p>
            <br />
            <h3>Youth</h3>
            <p>Bridget Jacob</p>
            <br />
            <h3> Administration</h3>
            <p>Denis Denischuk</p>
            <br />
          </p>
        </div>

        <div className="socialmedia__icons">
          <Socialmedia />
        </div>
      </div>
    </div>
  );
}

export default Centercontentclubleaders;
