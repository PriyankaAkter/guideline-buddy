import React from "react";
import { pricing } from "../../components/shared/data";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className='container pb-20 xl:pb-64'>
      <h3 className='text-center'>Pick The Plan That Works for You</h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-20 xl:place-items-center mt-24  '>
        {pricing?.map((price: any, index: number) =>
          price?.id == 2 ? (
            <div
              key={index}
              className=' h-full xl:h-[757px] p-2 xl:px-[18px] xl:py-4 border-4 border-[#D385DC] rounded-[60px] relative'
            >
              <button className='bg-[#5437CC] py-3 px-4 xl:px-14 text-white rounded-[60px] text-[20px] absolute -top-3 left-1/2 transform -translate-x-1/2'>
                Most Popular
              </button>
              <div
                className={`bg-[#EFEFF0] h-full py-20 rounded-[60px] pl-10 pr-4 xl:px-20 flex flex-col    justify-center items-center gap-8 `}
              >
                <h5>{price?.title}</h5>
                <h3>{price?.subtitle}</h3>

                {price?.description?.map((item: any, index: number) => (
                  <ul
                    key={index}
                    className='list-disc text-2xl font-poppins  w-full xl:w-[320px]'
                  >
                    <li>{item}</li>
                  </ul>
                ))}
                <Link
                  href='/'
                  className='rounded-[33px]  text-xl  text-white px-12 py-3 w-fit'
                  style={{
                    background:
                      "linear-gradient(90deg, #D385DC -7.88%, #5437CC 111.68%)",
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className={` bg-[#EFEFF0] h-full xl:h-[726px] py-12 xl:py-20 rounded-[60px] px-8 xl:px-20 flex flex-col    justify-center items-center gap-8  `}
            >
              <h5>{price?.title}</h5>
              <h3>{price?.subtitle}</h3>

              {price?.description?.map((item: any, index: number) => (
                <ul
                  key={index}
                  className='list-disc text-2xl font-poppins  w-full xl:w-[320px]'
                >
                  <li>{item}</li>
                </ul>
              ))}
              <Link
                href='/'
                className='rounded-[33px]  text-xl  text-white px-12 py-3 w-fit'
                style={{
                  background:
                    "linear-gradient(90deg, #D385DC -7.88%, #5437CC 111.68%)",
                }}
              >
                Get Started
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;
