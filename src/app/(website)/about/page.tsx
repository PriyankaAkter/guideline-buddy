import React from "react";
import AboutStory from "./components/AboutStory";
import Founders from "./components/Founders";
import AboutDetails from "./components/AboutDetails";
import AboutMission from "./components/AboutMission";
import AboutMissionVision from "./components/AboutMissionVision";
import AboutHero from "./components/AboutHero";
import AboutFounder from "./components/AboutFounder";

const Page = () => {
  return (
    <div className="container">
      <AboutHero />
      <AboutMissionVision />
      <AboutMission />
      <AboutStory />
      <AboutDetails />
      <AboutFounder />
    </div>
  );
};

export default Page;
