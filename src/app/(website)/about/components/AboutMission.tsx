import Image from "next/image";
import React from "react";

const AboutMission = () => {
  return (
    <div style={{background:"linear-gradient(291deg, #5437CC 55.93%, #D385DC 154.26%)"}} className="rounded-tl-full rounded-bl-full py-[178px] pl-[181px] flex items-center w-screen ">
      <div className="w-[1154px] text-center">
        <h1 className="text-[#F8F6F8] mb-16">
          Boost Approval Rates; <br />Help More People
        </h1>
        <h4 className="text-[#F8F6F8] text-[30px] w-[861px] mx-auto font-normal">
          Our promise is simple. We want to be your trusted partner, empowering
          homeownership for more people. Join us in changing the name of the
          mortgage game.
        </h4>
      </div>
      <div className="relative w-[265px] h-[265px]  ">
        <Image src="/assets/images/about4.png" fill alt="image"  />
      </div>
    </div>
  );
};

export default AboutMission;
