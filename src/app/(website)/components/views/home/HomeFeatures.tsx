import React from "react";
import Button from "../../shared/Button";
import Image from "next/image";

const HomeFeatures = () => {
  return (
    <div className="container grid gap-28 xl:gap-[200px]">
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-14  ">
        <div className="order-last 2xl:order-first">
          <h3 className="w-full xl:w-[728px]">
            Choose Guideline Buddy 
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
        <div className="relative w-[366px] lg:w-[730px]  h-[229px] lg:h-[509px] ">
          <Image src="/assets/images/img3.png" fill alt="iamge" />
        </div>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-14   ">
       
      <div className="relative w-[366px] lg:w-[730px]  h-[229px] lg:h-[509px] ">
          <Image src="/assets/images/img4.png" fill alt="iamge" />
        </div>
        <div >
          <h3>
          Bridging the Gap with Human-Centered AI
          </h3>
          <p className="mb-10">
          Discover why top mortgage professionals choose Guideline Buddy. From advanced AI tools to a commitment to fair lending, we provide the competitive edge you need in today's dynamic market. Explore the features that set us apart.
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
