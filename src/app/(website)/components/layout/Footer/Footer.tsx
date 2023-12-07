import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0F1114] text-white">
      <div className="container ">
        <div className="grid gap-10 lg:gap-[342px] grid-cols-1 lg:grid-cols-2">
          <div className="mt-10 xl:my-40 ">
            <h3>Stay in The Loop</h3>
            <p>
              Subscribe to our newsletter and follow us on social media to stay
              updated on the latest industry trends, Guideline Buddy news, and
              exclusive insights.
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="flex justify-between items-center pb-20">
          <div className="relative w-[70px] h-[66px] md:w-[118px] md:h-[111px] ">
            <Image src="/assets/images/logo.png" fill alt="logo" />
          </div>
          <div className="flex flex-col gap-2 xl:gap-10 items-center ">
            <h4 className="text-white">Follow us on socials</h4>
            <div className="flex gap-4">
              <FaInstagram className="w-8 h-16 xl:w-16 xl:h-16 text-white" />
              <FaFacebook className="w-8 h-16 xl:w-16 xl:h-16 text-white" />
              <FaLinkedin className="w-8 h-16 xl:w-16 xl:h-16 text-white" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#5C5959] h-[1px]"></div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2  py-12">
            <p className="text-base">
              2023 Guideline Buddy. All rights reserved.
            </p>
            <div className="  w-full order-first md:order-last  text-base flex gap-8 justify-between xl:justify-start">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Resources</Link>
              <Link href="/">Terms of Service</Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
