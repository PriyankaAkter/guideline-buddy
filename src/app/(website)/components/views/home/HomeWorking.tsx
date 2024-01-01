import React from "react";

import Image from "next/image";
import { items } from "../../shared/data";
import { Type } from "@/app/types/types";

type WorkType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const HomeWorking = () => {
  return (
    <div className='pt-[200px] container px-12'>
      <h1 className='text-center'>
        Working with Guideline <br />Buddy means working with:
      </h1>
      <div className='mt-36 grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32  xl:grid-cols-3 gap-x-6 2xl:gap-[70px]  relative  '>
        {items?.map((item: WorkType) => (
          <div
            key={item?.id}
            className='px-[54px]  flex flex-col gap-5 items-center  bg-[#D1C9F1]  rounded-[20px] xl:rounded-[60px]  text-center'
            
          >
            <div className='relative w-24 h-24 sm:w-[157px] sm:h-[157px] -top-12 sm:-top-20  '>
              <Image src='/assets/images/icons1.png' fill alt='image' />
            </div>
            

            <div className='flex flex-col items-center gap-9   relative -top-12'>
              <h5 className='font-semibold'>{item?.title}</h5>
              <p className='text-[#374151] text-left'>
                {item?.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWorking;
