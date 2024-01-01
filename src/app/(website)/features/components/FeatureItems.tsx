import { Type } from "@/app/types/types";

import React from "react";
import { features } from "../../components/shared/data";
import FeatureCard from "../../components/shared/FeatureCard";

const FeatureItems = () => {
  return (
    <div className='container py-[200px]'>
      <h1 className='text-center'>Guideline Buddy Has Your Back</h1>
      <div className='grid  gap-[140px] mt-[170px]'>
        {features?.map((feature: Type) => (
          <FeatureCard feature={feature} key={feature?.id} />
        ))}
      </div>
    </div>
  );
};

export default FeatureItems;
