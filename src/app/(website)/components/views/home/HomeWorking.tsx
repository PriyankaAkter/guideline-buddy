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
    <div className='pt-14 container'>
      <h3 className='w-full xl:w-[846px]    mx-auto text-center'>
        Working with Guideline Buddy means working with:
      </h3>
      <div className='mt-28 grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32  xl:grid-cols-3 gap-x-12 2xl:gap-32  relative  '>
        {items?.map((item: WorkType) => (
          <div
            key={item?.id}
            className='  flex flex-col items-center  bg-[#D1C9F1]  rounded-[20px] md:rounded-[60px] px-4 pb-10 text-center'
          >
            <div className='relative w-24 h-24 sm:w-[157px] sm:h-[157px] -top-12 sm:-top-20  '>
              <Image src='/assets/images/img1.png' fill alt='image' />
            </div>
            <div className='flex flex-col items-center gap-6   '>
              <h5 className='font-semibold'>{item?.title}</h5>
              <p className='text-center w-full lg:w-[335px]'>
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
