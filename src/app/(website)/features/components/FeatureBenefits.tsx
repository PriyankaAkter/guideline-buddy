import Image from "next/image";
import React from "react";

const FeatureBenefits = () => {
  return (
    <div className="grid gap-36 container  ">
      <div className="w-[998px]  mx-auto text-center">
        <h3>User Benefits</h3>
        <p className=" mt-10">
           As a Guideline Buddy user, you get access to comprehensive guidelines
          from top institutions like Fannie Mae, Freddie Mac, FHA, VA, and USDA.
          By upgrading your plan, you not only unlock more investors and
          lenders, but also gain access to a wider range of agency and non-QM
          loans. Sounds like a win-win in our book!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[111px] place-items-center ">
        <div className="  ">
          <h3>
          Stay organized and keep tabs on important chats
          </h3>
          
          <p className="mb-10">
          Whether you're working on a loan or any other task that needs revisiting, just mark it as your favorite. That way, you can come back to it whenever you're ready to wrap things up, making your workflow smooth and efficient.

          </p>
          
        </div>
        <div className="relative w-full md:w-[730px] lg:w-full h-[509px] ">
          <Image src="/assets/images/feature3.png" fill alt="iamge" />
        </div>
      </div>
    </div>
  );
};

export default FeatureBenefits;
