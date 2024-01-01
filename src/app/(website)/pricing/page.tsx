import Pricing from "./components/Pricing";
import FeatureHero from "../features/components/featureHero";
import FeatureCallToAction from "../features/components/FeatureCallToAction";
import PricingBlog from "./components/PricingBlog";
import PricingHeading from "./components/PricingHeading";
import HomeAccordion from "../components/views/home/HomeAccordion";

const Page = () => {
  return (
    <div>
      
      <Pricing />
      <PricingHeading />
      <FeatureHero />
      <FeatureCallToAction />
      <PricingBlog />
      <HomeAccordion />
    </div>
  );
};

export default Page;
