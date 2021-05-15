import React from "react";
import "./Centercontentrotarysplashpark.css";
import Socialmedia from "./Socialmedia";
import image1 from "./countryside.jpg";

function Centercontentrotarysplashpark() {
  return (
    <div className="content__center">
      <div className="content__cen">
        <div className="pic">
          <img src={image1} alt="" />
        </div>

        <div className="feed">
          <p>
            The Rotary Club of Ladner supports a variety of local and
            international projects. Funds are raised through the sale of the
            club’s annual calendar, other fund-raisers and the generosity of
            sponsors and club members. Many of our projects are hands on - sweat
            equity, some are financial support – all place “Service Above Self”.{" "}
          </p>
        </div>
        <div className="contactpeople">
          <div className="imgtext">
            <h1>Local Service Projects</h1>
            Extended Care Unit garden – Delta Hospital
            <br />
            Spartina removal Boundary Bay – an invasive plant
            <br />
            Serenity garden Delta Hospital
            <br />
            The Rotary Foundation – support for local projects
            <br />
            Adventures in Citizen – Ottawa – youth program
            <br />
            RYLA – Rotary Youth Leadership Award
            <br />
            Little House Society
            <br />
            Christmas hampers
            <br />
            Bursaries for Delta students
            <br />
            Rotary Park near Delta City Hal
            <br />
            Delta Youth Awards with RC of North Delta & RC of Tsawwassen
            <br />
            Delta Community Living Society
            <br />
            Earthwise Society - Delta
            <br />
            Interact Club – Delta Secondary School
            <br />
            REACH Child Youth Development Society
            <br />
            Delta Hospital Foundation
            <br />
            Community Van for Delta Police Department
            <br />
          </div>

          <div className="imgtext">
            <h1>International Service Projects</h1>
            Extended Care Unit garden – Delta Hospital
            <br />
            Spartina removal Boundary Bay – an invasive plant
            <br />
            Serenity garden Delta Hospital
            <br />
            The Rotary Foundation – support for local projects
            <br />
            Adventures in Citizen – Ottawa – youth program
            <br />
            RYLA – Rotary Youth Leadership Award
            <br />
            Little House Society
            <br />
            Christmas hampers
            <br />
            Bursaries for Delta students
            <br />
            Rotary Park near Delta City Hal
            <br />
            Delta Youth Awards with RC of North Delta & RC of Tsawwassen
            <br />
            Delta Community Living Society
            <br />
            Earthwise Society - Delta
            <br />
            Interact Club – Delta Secondary School
            <br />
            REACH Child Youth Development Society
            <br />
            Delta Hospital Foundation
            <br />
            Community Van for Delta Police Department
            <br />
          </div>
        </div>

        <div className="socialmedia__icons">
          <h1>Follow us on</h1>
          <Socialmedia />
        </div>
      </div>
    </div>
  );
}

export default Centercontentrotarysplashpark;
