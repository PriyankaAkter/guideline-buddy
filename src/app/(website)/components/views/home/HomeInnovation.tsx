import Image from "next/image";
import React from "react";

const HomeInnovation = () => {
  return (
    <div className="bg-[#5437CC] pr-[56px] pl-[140px]  py-[62px]   rounded-tr-[557px] mr-36 rounded-br-[557px]" >
      <div className="sb  flex items-center justify-between ">
      <h2 className="w-[663px] text-white  sb">Unleash the Power of Innovation in Mortgage Lending</h2>
      <div className="relative w-[768px] h-[768px]  ">
        <Image src="/assets/images/img2.png" fill alt="image" />
      </div>
      </div>
      
    </div>
  );
};

export default HomeInnovation;
