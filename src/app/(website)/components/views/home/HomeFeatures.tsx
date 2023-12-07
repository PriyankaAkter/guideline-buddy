import React from "react";
import Button from "../../shared/Button";
import Image from "next/image";

const HomeFeatures = () => {
  return (
    <div className="grid gap-[200px] container">
      <div className="grid grid-cols-2 place-items-center gap-[52px]  ">
        <div className="  ">
          <h3>
            Choose Guideline Buddy <br />
            for a Competitive Edge
          </h3>
          <p className="mb-10">
            We believe in AI as a partner, not a replacement. Our platform
            bridges the gaps within the mortgage industry, offering a level
            playing field for both tech-savvy newcomers and seasoned
            professionals alike. Learn how our human-centered approach empowers
            you by handling the grunt work, so you can focus on what you do
            best.
          </p>
          <Button
            title="See Our Approach in Action"
            href="/"
            className="bg-[#5437CC]"
          />
        </div>
        <div className="relative w-full md:w-[730px] lg:w-full h-[509px] ">
          <Image src="/assets/images/img3.png" fill alt="iamge" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[52px] ">
      <div className="relative w-full md:w-[730px] h-[509px] ">
          <Image src="/assets/images/img4.png" fill alt="iamge" />
        </div>
        <div className="  text-right">
          <h3>
            Choose Guideline Buddy <br />
            for a Competitive Edge
          </h3>
          <p className="mb-10">
            We believe in AI as a partner, not a replacement. Our platform
            bridges the gaps within the mortgage industry, offering a level
            playing field for both tech-savvy newcomers and seasoned
            professionals alike. Learn how our human-centered approach empowers
            you by handling the grunt work, so you can focus on what you do
            best.
          </p>
          <Button
            title="See Our Approach in Action"
            href="/"
            className="bg-[#5437CC]"
          />
        </div>
        
      </div>
    </div>
  );
};

export default HomeFeatures;
