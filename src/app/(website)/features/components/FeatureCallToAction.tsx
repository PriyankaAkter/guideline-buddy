import Link from "next/link";
import React from "react";

const FeatureCallToAction = () => {
  return (
    <div className='max-w-[1335px] py-16 xl:py-40 bg-[#5437CC] my-36 rounded-[20px] xl:rounded-[60px] mx-auto text-white flex flex-col justify-center items-center gap-16'>
      <h3 className='text-center'>
        Short Headline/
        <br />
        Call to Action
      </h3>
      <Link
        href='/'
        className='rounded-[33px]  text-xl  text-white px-12 py-3 w-fit'
        style={{
          background:
            "linear-gradient(90deg, #EAB9F0 -14.08%, #DA61E6 120.17%)",
        }}
      >
        Get Started
      </Link>
    </div>
  );
};

export default FeatureCallToAction;
