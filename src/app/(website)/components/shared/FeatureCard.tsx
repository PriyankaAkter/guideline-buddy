import { Type } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDevices } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

type FeatureCardType = {
  feature: Type;
};

const FeatureCard: React.FC<FeatureCardType> = ({ feature }) => {
  return (
    <div>

    <div className="grid grid-cols-1 2xl:grid-cols-2   gap-8  mb-14">
      <div className="flex flex-col  justify-center gap-4  px-3">
        <h4 className="">{feature?.title}</h4>

        <p className="text-2xl 2xl:w-[509px]">{feature?.description}</p>
      </div>
      <div className="relative order-first 2xl:order-last w-[366px] h-[240px] xl:w-[811px]   xl:h-[457px]  ">
        <Image src={feature?.image} fill alt="iamge" />
      </div>
      
    </div>
    <div className="w-full h-[2px] bg-[#5C5959]"></div>
    </div>
  );
};

export default FeatureCard;
