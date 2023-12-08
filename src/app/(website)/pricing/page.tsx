import React from "react";
import Hero from "./components/Hero";
import Industry from "./components/Industry";
import Pricing from "./components/Pricing";
import HomeInsights from "../components/views/home/HomeInsights";
import HomeAccordion from "../components/views/home/HomeAccordion";

const Page = () => {
  return (
    <div>
      <Hero />
      <Pricing />
      <Industry />
      <HomeInsights />
      <HomeAccordion />
    </div>
  );
};

export default Page;
