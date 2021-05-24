import React from "react";
import "./CentercontentprojectandPartners.css";
import CardItem from "./CardItem";

function CentercontentprojectandPartners() {
  return (
    <div className="cards">
      <h1>Education</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/bumuyange.jpeg"
              text="At Bumuyange "
              label="Meeting with the bumuyange people"
              path="/services"
            />
            <CardItem
              src="images/demo.jpg"
              text="Demonstrating how the 'kamata works'"
              label="Metting at Kaimosi village"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/meeting3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/team members.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/meeting2.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
      <h1>Health</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/quavas.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Guavas"
              path="/services"
            />
            <CardItem
              src="images/avacado.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Mizambalao"
              path="/products"
            />
            <CardItem
              src="images/jackfruit.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Avacado"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/starfruit.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="'Mapapandi'"
              path="/services"
            />
            <CardItem
              src="images/passionfruit.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Bananas"
              path="/products"
            />
            <CardItem
              src="images/Victoriafruit.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="'Sugarcane'"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>

      <h1>Water</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/maasai1.jpg"
              text="Butiti primary School in need of a toilet"
              label="Need a toilet"
              path="/services"
            />
            <CardItem
              src="images/mijikenda.jpg"
              text="Lusengeli Primary School in need of a classrroom"
              label="Classroom"
              path="/products"
            />
            <CardItem
              src="images/samburu.jpg"
              text="Kaimosi "
              label="Avacado"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/mombasa.jpg"
              text="Jiggers campaign"
              label="Removal of jiggers"
              path="/services"
            />
            <CardItem
              src="images/dresscodes.jpg"
              text="Local young children need playing kits and balls together with other resources to build their talents"
              label="Talent growth"
              path="/products"
            />
            <CardItem
              src="images/luhya1.jpg"
              text="Matters health and hygiene"
              label="Sensitization Program"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>

      <h1>Women</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Butiti primary School in need of a toilet"
              label="Need a toilet"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Lusengeli Primary School in need of a classrroom"
              label="Classroom"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Jiggers campaign"
              label="Removal of jiggers"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Local young children need playing kits and balls together with other resources to build their talents"
              label="Talent growth"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Matters health and hygiene"
              label="Sensitization Program"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CentercontentprojectandPartners;
