import React from "react";
import Button from "../../shared/Button";
import Image from "next/image";
import FeatureCard from "@/app/(website)/features/components/FaetureCard";


const HomeFeatures = () => {
  return (
    <div className="pb-[200px]">
      <div className="grid gap-[200px]">
      <div
      className="w-full "
      style={{
        background: "url(/assets/images/bg.png)",
        // backgroundPosition:"center",
        backgroundSize: "cover",
      }}
    >
      <div className="container grid grid-cols-2 items-center gap-[211px] ">
        <div>
          <h2 className="mb-7">Choose Guideline Buddy for a Competitive Edge</h2>
          <p className="mb-20 text-[#6B7280] text-[18px]">
          We believe in AI as a partner, not a replacement. Our platform bridges the gaps within the mortgage industry, offering a level playing field for both tech-savvy newcomers and seasoned professionals alike. Learn how our human-centered approach empowers you by handling the grunt work, so you can focus on what you do best.
          </p>
          <Button
            href="/features"
            title="See Our Approach in Action"
            className="py-[14px] px-14 w-fit "
          />
        </div>
        <div className="relative w-[890px] h-[651px] ">
          <Image src="/assets/images/f3.png" fill alt="feature" className="rounded-[60px]" />
        </div>
      </div>
    </div>
    <div
      
      style={{
        background: "url(/assets/images/bg2.png)",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" grid grid-cols-2 items-center gap-[211px] mr-[100px] -ml-10">
      <div className="relative w-[911px] h-[651px] ">
          <Image src="/assets/images/f.png" fill alt="feature" className="rounded-[60px]" />
        </div>
        <div>
          <h2 className="mb-7">Bridging the Gap with Human-Centered AI</h2>
          <p className="mb-20 text-[#6B7280] text-[18px]">
          Discover why top mortgage professionals choose Guideline Buddy. From advanced AI tools to a commitment to fair lending, we provide the competitive edge you need in today's dynamic market. Explore the features that set us apart.
          </p>
          <Button
            href="/features"
            title="Elevate Your Mortgage Business"
            className="py-[14px] px-14 w-fit "
          />
        </div>
        
      </div>
    </div>
      </div>
      
    </div>
  );
};

export default HomeFeatures;
{/* <FeatureCard
        title="Choose Guideline Buddy for a Competitive Edge"
        subTitle="We believe in AI as a partner, not a replacement. Our platform bridges the gaps within the mortgage industry, offering a level playing field for both tech-savvy newcomers and seasoned professionals alike. Learn how our human-centered approach empowers you by handling the grunt work, so you can focus on what you do best."
        image="/assets/images/f3.png"
      /> */}