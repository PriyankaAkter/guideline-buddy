import React from "react";

import FeatureBenefits from "./components/FeatureBenefits";
import FeatureItems from "./components/FeatureItems";
import FeatureNotice from "./components/FeatureNotice";
import FeatureCallToAction from "./components/FeatureCallToAction";
import FeatureHero from "./components/featureHero";

const Page = () => {
  return (
    <div>
      <FeatureHero />
      <FeatureItems />
      <FeatureNotice />
      <FeatureCallToAction />
    </div>
  );
};

export default Page;
