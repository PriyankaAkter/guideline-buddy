import Image from "next/image";
import React from "react";

const AboutDetails = () => {
  return (
    <div className='mb-16 xl:mb-32 w-full p-4 xl:p-16'>
      <div className=' bg-[#D1C9F1] rounded-[20px] xl:rounded-[60px] mx-auto'>
        <div className=' grid grid-cols-1 xl:grid-cols-2  px-4 lg:px-12  2xl:pl-32 2xl:pr-10  py-12 gap-12 '>
          <div className='w-full 2xl:w-[592px]  grid place-items-center'>
            <div>
              <h2>Don’t Just Take Our Word For It</h2>
              <h6 className='mb-10 text-3xl font-semibold'>
                See what our users have to say
              </h6>
            </div>
            <div>
              <p className='mb-10 text-3xl'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
              <h6 className=' text-[28px] text-[#0F1114] tracking-[2.52px]'>
                CLIENT NAME, INDUSTRY
              </h6>
            </div>
          </div>
          <div className=' relative w-full  xl:h-[500px] 2xl:h-[797px]  aspect-square'>
            <Image
              className='object-contain'
              src='/assets/images/about1.png'
              fill
              alt='Banner'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
