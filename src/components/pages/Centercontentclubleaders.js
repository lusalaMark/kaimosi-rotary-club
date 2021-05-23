import React from "react";
import "./Centercontentclubleaders.css";
import Socialmedia from "./Socialmedia";
import image1 from "./countryside.jpg";

function Centercontentclubleaders() {
  return (
    <div className="content__center">
      <div className="content__cen">
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">
            Patron
            <br />
            Billystrom Jivetti
            <br />
            Period : 2020-2025
          </div>
        </div>
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">
            President
            <br />
            Lydia Khasungu Songole
            <br />
            Period : 2020-2022
          </div>
        </div>

        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">
            Vice President
            <br />
            Patrick Lidovolo
            <br />
            Period : 2020-2022
          </div>
        </div>
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">
            Treasurer
            <br />
            Hesborn Ihaji
            <br />
            Period : 2020-2022
          </div>
        </div>
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">
            Secretary
            <br />
            Leah Makete
            <br />
            Period : 2020-2022
          </div>
        </div>
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">
            Sergent at Arms
            <br />
            Briam Malemo
            <br />
            Period : 2020-2022
          </div>
        </div>
        <div className="contactpeople">
          <div className="pic">
            <img src={image1} alt="" />
          </div>
          <div className="imgtext">
            Coordinator
            <br />
            Hardley Sinjaa Songole
            <br />
            Period : 2020-2022
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

export default Centercontentclubleaders;
