import Image from "next/image";
import React from "react";

const HomeInnovation = () => {
  return (
    <div className='bg-gradient-to-b xl:bg-gradient-to-r from-[#5437CC] from-[30%] xl:from-[50%] to-[50%] to-[#fff]  xl:mr-[75px] lg:my-20'>
      <div
        className='xl:container bg-[#5437CC] flex flex-col  xl:flex-row items-center justify-between gap-12 xl:gap-2 py-9 xl:p-14 pl-0 rounded-bl-[420px] rounded-br-[420px] 
      
      md:rounded-bl-[620px] md:rounded-br-[620px] 
      xl:rounded-tr-[420px] xl:rounded-br-[420px]'
      >
        <h2 className='flex-1 max-w-[620px] px-4 xl:p-0 text-white  text-center xl:text-left'>
          Unleash the Power of Innovation in Mortgage Lending
        </h2>
        <div className='relative w-[318px] h-[318px] lg:w-[460px] lg:h-[460px] 2xl:h-[620px] 2xl:w-[620px]  rounded-full '>
          <Image src='/assets/images/img2.png' fill alt='image' />
        </div>
      </div>
      </div>
      
    
  );
};

export default HomeInnovation;
