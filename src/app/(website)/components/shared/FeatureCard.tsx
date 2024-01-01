import { Type } from "@/app/types/types";
import Image from "next/image";
import React from "react";
import { BiDevices } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

type FeatureCardType = {
  feature: Type;
};

const FeatureCard: React.FC<FeatureCardType> = ({ feature }) => {
  const isOddId = feature?.id % 2 !== 0;

  return (
    <div className="grid grid-cols-2">
      <div className={`flex flex-col flex-1 justify-center  ${isOddId ? '' : 'ml-auto'} px-3 gap-[60px]`}>
        <h4 className="font-semibold">{feature?.title}</h4>
        <h5 className="text-[#6B7280] w-[509px] ">{feature?.description}</h5>
      </div>
      <div className={`relative ${isOddId ? 'order-last' : 'order-first'} w-[820px] h-[451px]`}>
        <Image src={feature?.image} fill alt="image" />
      </div>
    </div>
  );
};

export default FeatureCard;
