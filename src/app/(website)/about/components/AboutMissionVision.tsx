import React from "react";

const AboutMissionVision = () => {
  return (
    <div className='grid grid-cols-1 2xl:grid-cols-2 2xl:gap-[140px] w-[1412px] mx-auto my-48'>
      <div className='bg-[#EEE5FF] rounded-[20px] p-[60px]'>
        <h1 className="text-[#5437CC] ">Our Mission</h1>
        <h5 className="text-[#5437CC]">
        Equipping and empowering mortgage professionals to create faster, more accurate, and more accessible pathways to homeownership for everyone
        </h5>
      </div>
      
      <div className='bg-[#EEE5FF] rounded-[20px] p-[60px]'>
        <h1 className="text-[#5437CC]">Our Vision</h1>
        <h5 className="text-[#5437CC]">
        To lead the way in reshaping the mortgage ecosystem, fostering a future where innovation, reliability, and 
simplicity converge 
        </h5>
      </div>
    </div>
  );
};

export default AboutMissionVision;
