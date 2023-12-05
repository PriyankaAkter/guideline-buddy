import React from "react";

import Link from "next/link";
import Image from "next/image";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div className="flex  justify-between items-center py-16 pl-[144px]">
      <div className="max-w-[728px]">
        <h3>Your Mortgage Compass for the Digital Age</h3>
        <p className="mb-10">Empowering professionals, enabling dreams</p>
        <Button title="Start Today!" href="/" className="bg-[#5437CC]" />
      </div>
      <div className="relative w-[978px] h-[651px] ">
        <Image src='/assets/images/hero.png' fill alt="iamge" />
      </div>
    </div>
  );
};

export default Hero;
