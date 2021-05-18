import React from "react";
import "./Home.css";
import Sidebar from "../../Sidebar";
import SidebarRight from "../../SidebarRight";
import Carouselslider from "./Carouselslider";

<<<<<<< HEAD
=======
// import "react-responsive-carousel/lib/styles/carousel.min.css";

>>>>>>> 67367879687a409480ec139f3c9f57d558bca8b8
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
