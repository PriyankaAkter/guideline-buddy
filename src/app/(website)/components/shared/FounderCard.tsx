import { Type } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDevices } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

type FounderCardType = {
  founder: Type;
};

const FounderCard: React.FC<FounderCardType> = ({ founder }) => {
  return (
    <div className="bg-cover flex flex-col justify-end items-end px-16 pb-16 text-white bg-center relative h-[641px] rounded-[60px]" style={{backgroundImage: `url(${founder?.image})`}}>
      <h3 className="text-white">{founder?.title}</h3>

      <p className="text-3xl ">{founder?.description}</p>
    </div>
  );
};

export default FounderCard;
