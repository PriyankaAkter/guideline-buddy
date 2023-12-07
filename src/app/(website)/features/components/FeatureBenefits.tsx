import Image from "next/image";
import React from "react";

const FeatureBenefits = () => {
  return (
    <div className='grid gap-36 container  '>
      <div className='2xl:w-[998px]  mx-auto text-center'>
        <h3>User Benefits</h3>
        <p className=' mt-10'>
           As a Guideline Buddy user, you get access to comprehensive guidelines
          from top institutions like Fannie Mae, Freddie Mac, FHA, VA, and USDA.
          By upgrading your plan, you not only unlock more investors and
          lenders, but also gain access to a wider range of agency and non-QM
          loans. Sounds like a win-win in our book!
        </p>
      </div>
      <div className='grid grid-cols-1 2xl:grid-cols-2 gap-14 2xl:gap-[111px] place-items-center '>
        <div className=' order-last 2xl:order-first '>
          <h3>Stay organized and keep tabs on important chats</h3>

          <p className='mb-10'>
            Whether you&apos;re working on a loan or any other task that needs
            revisiting, just mark it as your favorite. That way, you can come
            back to it whenever you&apos;re ready to wrap things up, making your
            workflow smooth and efficient.
          </p>
        </div>
        <div className='relative   lg:h-[509px]  aspect-[298/195]'>
          <Image src='/assets/images/feature3.png' fill alt='iamge' />
        </div>
      </div>
    </div>
  );
};

export default FeatureBenefits;
