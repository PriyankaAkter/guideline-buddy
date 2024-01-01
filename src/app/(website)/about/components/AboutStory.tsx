import React from "react";
import Button from "../../components/shared/Button";
import Link from "next/link";

const AboutStory = () => {
  return (
    
      <div className='w-[1115px] mx-auto text-center flex flex-col items-center gap-6  my-[200px]'>
        <h1 className="">Our Story</h1>
        <p className='text-center text-[#6B7280] mb-20'>
         Our journey began with a vision to revolutionize the mortgage industry. With decades of collective experience in mortgage oversight, we witnessed the challenges that professionals faced in accessing and comprehending investor guidelines. The traditional methods were time-consuming and prone to errors, and we knew there had to be a better way. The advent of AI technology presented an incredible opportunity, and we set out to create a solution that would simplify the mortgage process, making it more efficient, accessible, and reliable.
        </p>
        <Button
      href="/"
      title="Get Started"
      className="px-10"
      style={{
        background:
          "linear-gradient(276deg, #4B30BA -9.31%, #D950E8 105.83%)",
      }}
    />
      </div>
    
  );
};

export default AboutStory;
