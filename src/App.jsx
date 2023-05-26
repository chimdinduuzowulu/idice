import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { ExecutingAgency } from "./components/executingagency";
import { About } from "./components/about";
import { Objectives } from "./components/objectives";
import { Gallery } from "./components/gallery";
import { Goals } from "./components/goals";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import FAQ  from "./components/faq";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <ExecutingAgency data={landingPageData.Agency} />
      <About data={landingPageData.About} />
      <Objectives data={landingPageData.Services} />
      <Goals data={landingPageData.Objectives} />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
      <FAQ data={landingPageData.Faq}/>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
