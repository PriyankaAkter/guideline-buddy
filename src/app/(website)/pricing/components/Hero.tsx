import React from "react";
import Button from "../../components/shared/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex sb  justify-between items-center gap-10  py-36 container">
      <div className="w-[610px] sb ">
        <h3>Transparent Pricing, Clear Results</h3>
        <p className="mb-10">
          Whether you’re just getting started or are looking for a robust
          mortgage solution, we have three convenient pricing options to suit
          your needs.
        </p>
        <Button title="Start Today!" href="/" className="bg-[#5437CC]" />
      </div>
      <div className="relative w-full md:w-[869px] h-[567px] ">
        <Image src="/assets/images/pricing1.png" fill alt="iamge" />
      </div>
    </div>
  );
};

export default Hero;
