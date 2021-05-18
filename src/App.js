import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Stories from "./components/pages/Stories";
import ProjectandPartners from "./components/pages/ProjectandPartners";
import Membership from "./components/pages/Membership";
import ProjectSelection from "./components/pages/ProjectSelection";
import Events from "./components/pages/Events";
import ContactUs from "./components/pages/ContactUs";
import JoinUs from "./components/pages/JoinUs";
import Donate from "./components/pages/Donate";
import WeareRotary from "./components/pages/WeareRotary";
import ClubLeaders from "./components/pages/ClubLeaders";
import PresidentofrotaryclubofKaimosi from "./components/pages/PresidentofrotaryclubofKaimosi";
import HistoryofRotaryclubInternational from "./components/pages/HistoryofRotaryclubInternational";
import HistoryofRotaryclubinKenya from "./components/pages/HistoryofRotaryclubinKenya";
import HistoryofRotaryclubofKaimosi from "./components/pages/HistoryofRotaryclubofKaimosi";
import Serviceprojects from "./components/pages/Serviceprojects";
import Rotarysplashpark from "./components/pages/Rotarysplashpark";
import ProjectPartners from "./components/pages/ProjectPartners";
import Reasonstojoinrotary from "./components/pages/Reasonstojoinrotary";
import Kaimosirotaryserviceprojects from "./components/pages/Kaimosirotaryserviceprojects";
import Whatdoesrotarydo from "./components/pages/Whatdoesrotarydo";
import ClubEvents from "./components/pages/ClubEvents";
import DistrictEvents from "./components/pages/DistrictEvents";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/stories" component={Stories} />
          <Route path="/project-and-partners" component={ProjectandPartners} />
          <Route path="/membership" component={Membership} />
          <Route path="/project-selection" component={ProjectSelection} />
          <Route path="/events" component={Events} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/joinus" component={JoinUs} />
          <Route path="/donate" component={Donate} />
          <Route path="/wearerotry" exact component={WeareRotary} />
          <Route path="/clubleaders" component={ClubLeaders} />
          <Route
            path="/presidentofrotaryclubofkaimosi"
            component={PresidentofrotaryclubofKaimosi}
          />
          <Route
            path="/historyofrotaryclubinternational"
            component={HistoryofRotaryclubInternational}
          />
          <Route
            path="/historyofrotaryclubinkenya"
            component={HistoryofRotaryclubinKenya}
          />
          <Route
            path="/historyofrotaryclubofkaimosi"
            component={HistoryofRotaryclubofKaimosi}
          />
          <Route path="/serviceprojects" component={Serviceprojects} />
          <Route path="/rotarysplashpark" component={Rotarysplashpark} />
          <Route path="/projectpartners" component={ProjectPartners} />
          <Route path="/reasonstojoinrotary" component={Reasonstojoinrotary} />
          <Route
            path="/kaimosirotaryserviceprojects"
            component={Kaimosirotaryserviceprojects}
          />
          <Route path="/whatdoesrotarydo" component={Whatdoesrotarydo} />
          <Route path="/clubevents" component={ClubEvents} />
          <Route path="/districtevents" component={DistrictEvents} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
