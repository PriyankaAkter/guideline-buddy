import Image from "next/image";
import React from "react";

const HomeInnovation = () => {
  return (
    <div
      className="mt-[200px] w-[1780px] rounded-tr-full rounded-br-full relative"
      style={{
        background: 'linear-gradient(291deg, #5437CC 55.93%, #D385DC 154.26%)',
        
      }}
    >
      {/* Pseudo-element to create overlay with linear gradient */}
      <div
        className="w-full h-full rounded-tr-full rounded-br-full absolute inset-0"
        
        style={{
          background: "url('/assets/images/bg3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: "1",
        opacity:"0.9"
        }}
      ></div>

      <div className="flex items-center ml-[140px] py-24 relative z-10">
        <div className="relative w-[325.31px] h-[512px]">
          <Image src="/assets/images/question.png" fill alt="image" />
        </div>
        <div className="w-[977px] -left-28 relative">
          <h1 className="text-white font-normal mb-12 leading-[80px]">
            The Solution? That’s where{" "}
            <span className="font-bold">Guideline Buddy</span> Comes in
          </h1>
          <h6 className="text-[#F8F6F8] text-2xl">
            We’re on a mission to revolutionize how mortgage pros interact with
            guidelines. Guideline Buddy is a highly advanced AI chatbot
            extensively trained on a variety of investor and lender guidelines.
            No more endless PDF searches—with Guideline Buddy, finding the exact
            guideline for any loan scenario is a breeze! Buddy breaks it down in
            simple terms and tells you exactly where to find the guideline
            you’re looking for, saving you unparalleled amounts of precious
            time.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default HomeInnovation;
