import { Type } from "@/app/types/types";

import React from "react";
import { features } from "../../components/shared/data";
import FeatureCard from "../../components/shared/FeatureCard";
import Image from "next/image";

const FeatureItems = () => {
  return (
    <div className="container pt-[200px]  relative">
      <h1 className="text-center mb-[170px]">Guideline Buddy Has Your Back</h1>
      <div
        className="w-[1362px] h-[1799px] mx-auto relative z-0"
        style={{
          backgroundImage: `url(/assets/images/bg-gradient.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="w-[1167px] h-[1642px] py-[118px] px-[189px] mx-auto grid gap-28 rounded-se-[60px] rounded-es-[60px] absolute ml-[195px] z-100"
          style={{
            boxShadow: "0px 0px 33.8px 0px rgba(0, 0, 0, 0.08)",
            zIndex: 200, // Increased z-index
          }}
        >
          {features?.map((f: any) => (
            <div className="flex gap-[91px] ">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/images/icon.png"
                  fill
                  alt="feature"
                  className=""
                />
              </div>
              <div>
                <h4 className="text-4xl font-semibold mb-10">{f?.title}</h4>
                <p className="w-[509px] text-[#6B7280]">{f?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureItems;
