import Image from "next/image";
import Hero from "./components/views/home/Hero";
import HomeAbout from "./components/views/home/HomeAbout";
import HomeWorking from "./components/views/home/HomeWorking";
import HomeInnovation from "./components/views/home/HomeInnovation";
import HomeVision from "./components/views/home/HomeVision";
import HomeFeatures from "./components/views/home/HomeFeatures";
import HomeInsights from "./components/views/home/HomeInsights";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeInnovation />
      {/* <HomeAbout /> */}
      <HomeWorking />
      <HomeVision />
      <HomeFeatures />
      <HomeInsights />
    </div>
  );
}
