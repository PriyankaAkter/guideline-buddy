import Image from "next/image";
import React from "react";

const BlogHero = () => {
  return (
    <div>
      <h3>Discover the Latest Mortgage Insights</h3>
      <div className='bg-[#5C5959] w-full h-[2px]'></div>
      <div className='relative w-full max-w-[980px] aspect-[499/331] mt-32'>
        <Image src='/assets/images/blog1.png' fill alt='Banner' />
      </div>

      <h4 className='mt-5 xl:mt-9 text-2xl xl:text-5xl'>
        Here is a title to highlight of a recent article
      </h4>
    </div>
  );
};

export default BlogHero;
