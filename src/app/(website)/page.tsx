import Image from "next/image";
import Hero from "./components/views/home/Hero";

import HomeWorking from "./components/views/home/HomeWorking";
import HomeInnovation from "./components/views/home/HomeInnovation";
import HomeVision from "./components/views/home/HomeVision";
import HomeFeatures from "./components/views/home/HomeFeatures";
import HomeInsights from "./components/views/home/HomeInsights";
import HomeAccordion from "./components/views/home/HomeAccordion";
import HomeAbout from "./components/views/home/HomeAbout";
import PricingBlog from "./pricing/components/PricingBlog";
import HomeCallToAction from "./components/views/home/HomeCallToAction";
import HomeSponser from "./components/views/home/HomeSponser";
export default function Home() {
  return (
    <div>
      <Hero />
      <HomeSponser />
      <HomeAbout />
      <HomeInnovation />
      <HomeWorking />
      {/* <HomeVision /> */}
      <HomeCallToAction />
      <HomeFeatures />
      {/* <HomeInsights /> */}
      <PricingBlog />
      <HomeAccordion />
    </div>
  );
}
