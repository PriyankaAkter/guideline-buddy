import React from "react";

const AboutMission = () => {
  return (
    <div
      className='py-[6rem] 2xl:py-[12rem] rounded-[60px] mx-auto text-white flex flex-col justify-center items-center'
      style={{ backgroundImage: `url('/assets/images/about2.png')` }}
    >
      <div className='w-full xl:w-[994px] text-center '>
        <h1 className='text-center'>Boost Approval Rates; Help More People</h1>
        <h5 className='text-white'>
          Our promise is simple. We want to be your trusted partner, empowering
          homeownership for more people. Join us in changing the name of the
          mortgage game.
        </h5>
      </div>
    </div>
  );
};

export default AboutMission;
