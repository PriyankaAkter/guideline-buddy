import React from "react";

const AboutMissionVision = () => {
  return (
    <div className=" mx-auto grid grid-cols-3 sb">
      <div className="text-[#5437CC] text-center sb w-[516px]">
        <h3>Our Mission</h3>
        <p>
          Equipping and empowering mortgage professionals to create faster, more
          accurate, and more accessible pathways to homeownership for everyone
        </p>
      </div>
      <div className="w-[2px] bg-[#5437CC] h-full mx-[150px]"></div>
      <div className="text-[#5437CC] text-center sb w-[516px]">
        <h3>Our Vision</h3>
        <p>
          To lead the way in reshaping the mortgage ecosystem, fostering a
          future where innovation, reliability, and simplicity converge 
        </p>
      </div>
    </div>
  );
};

export default AboutMissionVision;
