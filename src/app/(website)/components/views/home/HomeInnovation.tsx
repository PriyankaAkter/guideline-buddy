import Image from "next/image";
import React from "react";

const HomeInnovation = () => {
  return (
    <div className="bg-[#5437CC]  mr-[75px]  pr-[75px] py-16 pl-[265px] flex items-center justify-between rounded-tr-[557px] rounded-br-[557px]" >
      <h2 className="max-w-[663px] text-white">Unleash the Power of Innovation in Mortgage Lending</h2>
      <div className="relative w-[768px] h-[768px]  ">
        <Image src="/assets/images/img2.png" fill alt="image" />
      </div>
    </div>
  );
};

export default HomeInnovation;