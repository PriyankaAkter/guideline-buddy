import Image from "next/image";
import React from "react";

const AboutDetails = () => {
  return (
    <div className="w-[1790px] bg-[#D1C9F1]  my-64 rounded-[60px] mx-auto">
      <div className=" grid grid-cols-2   pl-32 pr-10  py-12 ">
        <div className="w-[592px]  grid place-items-center">
          <div>
            <h2>Don’t Just Take Our Word For It</h2>
            <p className="mb-10 text-3xl">See what our users have to say</p>
          </div>
          <div>
            <p className="mb-10 text-3xl">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
            <h6 className=" text-[28px] text-[#0F1114] tracking-[2.52px]">CLIENT NAME, INDUSTRY</h6>
          </div>
        </div>
        <div className="relative w-full md:w-[811px] h-[797px] ">
          <Image src="/assets/images/about1.png" fill alt="iamge" />
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
