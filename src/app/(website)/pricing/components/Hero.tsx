import React from "react";
import Button from "../../components/shared/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='flex flex-col-reverse xl:flex-row   justify-between items-center gap-10  py-16 xl:py-36 container'>
      <div className='w-full xl:w-[610px]  '>
        <h3>Transparent Pricing, Clear Results</h3>
        <p className='mb-10'>
          Whether you’re just getting started or are looking for a robust
          mortgage solution, we have three convenient pricing options to suit
          your needs.
        </p>
        <Button title='Start Today!' href='/' className='bg-[#5437CC]' />
      </div>
      <div className='flex-1 relative w-full  aspect-[869/567] '>
        <Image src='/assets/images/pricing1.png' fill alt='Banner' />
      </div>
    </div>
  );
};

export default Hero;
