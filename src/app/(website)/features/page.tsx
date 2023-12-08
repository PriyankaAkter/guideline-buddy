import React from "react";
import FeatureHero from "./components/FeatureHero";
import FeatureBenefits from "./components/FeatureBenefits";
import FeatureItems from "./components/FeatureItems";
import FeatureNotice from "./components/FeatureNotice";
import FeatureCallToAction from "./components/FeatureCallToAction";

const Page = () => {
  return (
    <div>
      <FeatureHero />
      <FeatureBenefits />
      <FeatureItems />
      <FeatureNotice />
      <FeatureCallToAction />
    </div>
  );
};

export default Page;
