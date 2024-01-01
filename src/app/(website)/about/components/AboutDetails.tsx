import Image from "next/image";
import React from "react";

const AboutDetails = () => {
  return (
    <div className=" bg-[#D1C9F1] rounded-[20px] xl:rounded-[60px] mx-auto  py-[146px]">
      <div className="text-center mb-32">
        <h2>Don’t Just Take Our Word For It</h2>
        <h5 className="text-[#374151] font-medium">See what our users have to say</h5>
      </div>
      <div className="  px-[172px] grid grid-cols-2 gap-20 place-items-center">
        <div className="relative w-[621px]  h-[621px]">
          <Image
            className="object-contain"
            src="/assets/images/client1.png"
            fill
            alt="Client"
          />
        </div>
        <div>
          <h5 className="text-[#111827] mb-9">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </h5>
          <h4 className="text-[#111827] text-[28px] tracking-[1.4px] font-normal">CLIENT NAME, INDUSTRY</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
