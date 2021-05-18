import React from "react";
import "./Home.css";
import Sidebar from "../../Sidebar";
import SidebarRight from "../../SidebarRight";
import Carouselslider from "./Carouselslider";

function Home() {
  return (
    <div className="app">
      <div className="carousel">
        <Carouselslider />
      </div>
      <div className="app__body">
        <Sidebar />
        <SidebarRight />
      </div>
    </div>
  );
}

export default Home;
