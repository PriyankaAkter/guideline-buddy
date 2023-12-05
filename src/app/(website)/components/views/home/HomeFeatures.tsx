import React from "react";
import Button from "../../shared/Button";
import Image from "next/image";

const HomeFeatures = () => {
  return (
    <div className="grid gap-[242px]">
      <div className="flex  justify-between items-center gap-16 pl-[144px]">
        <div className="max-w-[728px]">
          <h3>Choose Guideline Buddy for a Competitive Edge</h3>
          <p className="mb-12">
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
        <div className="relative w-[978px] h-[651px] ">
          <Image src="/assets/images/img3.png" fill alt="iamge" />
        </div>
      </div>
      <div className="flex  justify-between items-center gap-16  pr-[144px]">
      <div className="relative w-[978px] h-[651px] ">
          <Image src="/assets/images/img4.png" fill alt="iamge" />
        </div>
        <div className="max-w-[728px] text-right">
          <h3>Bridging the Gap with Human-Centered AI</h3>
          <p className="mb-12">
          Discover why top mortgage professionals choose Guideline Buddy. From advanced AI tools to a commitment to fair lending, we provide the competitive edge you need in today's dynamic market. Explore the features that set us apart.

          </p>
          <Button
            title="Elevate Your Mortgage Business"
            href="/"
            className="bg-[#5437CC]"
          />
        </div>
        
      </div>
    </div>
  );
};

export default HomeFeatures;
