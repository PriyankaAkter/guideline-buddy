import React from "react";
import AboutStory from "./components/AboutStory";
import Founders from "./components/Founders";
import AboutDetails from "./components/AboutDetails";
import AboutMission from "./components/AboutMission";
import AboutMissionVision from "./components/AboutMissionVision";
import AboutHero from "./components/AboutHero";

const Page = () => {
  return (
    <div>
      <AboutHero />
      <AboutMissionVision />
      <AboutMission />
      <AboutStory />
      <AboutDetails />
      <Founders />
    </div>
  );
};

export default Page;
