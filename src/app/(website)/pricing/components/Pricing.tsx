import React from "react";
import { pricing } from "../../components/shared/data";
import Link from "next/link";
import Button from "../../components/shared/Button";

const Pricing = () => {
  return (
    <div className="container ">
      <div className="py-[177px]">
        <h1 className="text-center">AI Powered, Human Driven</h1>
        <p className="text-xl text-center">Pick The Plan That Works for You</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 2xl:gap-20 xl:place-items-center ">
        {pricing?.map((price: any, index: number) =>
          price?.id == 2 ? (
            <div
              key={index}
              className=" h-full xl:h-[732px] p-2 xl:px-[18px] xl:py-4 border-4 border-[#D385DC] rounded-[60px] relative"
            >
              <button className="bg-[#5437CC] py-3 px-4 xl:px-14 text-white rounded-[60px] text-[20px] absolute -top-7 lg:-top-6 left-1/2 transform -translate-x-1/2">
                Most Popular
              </button>
              <div
                className={` bg-[#EEE5FF] pt-[74px]  pb-[56px] h-[690px] px-20  rounded-[60px] flex flex-col    justify-between items-center `}
              >
                
                  <h4 className="text-[32px] text-[#0F1114]  font-poppins text-center ">
                    {price?.title}
                  </h4>
                  <h1 className="text-[60px] text-[#0F1114]  text-center font-atkinsonHyperlegible font-normal ">
                    {price?.subtitle}
                  </h1>

                  {price?.description?.map((item: any, index: number) => (
                    <ul
                      key={index}
                      className="list-disc text-xl xl:text-2xl font-poppins  w-full xl:w-[320px]"
                    >
                      <li>{item}</li>
                    </ul>
                  ))}

                  <Button
                    href="/"
                    title="Get Started"
                    className="py-[14px] px-14 w-fit "
                  />
                
              </div>
            </div>
          ) : (
            <div
              key={index}
              className={` bg-[#EEE5FF] pt-[74px]  pb-[56px] h-[690px] px-20  rounded-[60px] flex flex-col    justify-between items-center `}
            >
              <div>
                <h4 className="text-[32px] text-[#0F1114] mb-[37px] font-poppins text-center ">
                  {price?.title}
                </h4>
                <h1 className="text-[60px] text-[#0F1114] mb-[34px] text-center font-atkinsonHyperlegible font-normal ">
                  {price?.subtitle}
                </h1>

                {price?.description?.map((item: any, index: number) => (
                  <ul
                    key={index}
                    className="list-disc text-xl xl:text-2xl font-poppins  w-full xl:w-[320px]"
                  >
                    <li>{item}</li>
                  </ul>
                ))}
              </div>

              <Button
                href="/"
                title="Get Started"
                className="py-[14px] px-14 w-fit "
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;
