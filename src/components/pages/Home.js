import React from "react";
import "./Home.css";
import Sidebar from "../../Sidebar";
import SidebarRight from "../../SidebarRight";
import Carouselslider from "./Carouselslider";

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
// import "react-responsive-carousel/lib/styles/carousel.min.css";

>>>>>>> 67367879687a409480ec139f3c9f57d558bca8b8
>>>>>>> 75092581f78fb7497b59c077c01af56b71ff23f5
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
