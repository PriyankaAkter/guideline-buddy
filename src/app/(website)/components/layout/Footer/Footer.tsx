import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Button from "../../shared/Button";

const Footer = () => {
  return (
    <div className="bg-[#0F1114] text-white">
      <div className="container pt-20 pb-24 grid grid-cols-3">
        <div className="relative w-[70px] h-[66px] xl:w-[118px] xl:h-[111px] ">
          <Image src="/assets/images/logo1.png" fill alt="logo" />
        </div>
        <div>
          <div className="">
            <h5 className="text-[26px] text-[#F8F6F8] mb-5">
              Stay in The Loop
            </h5>
            <p className="text-base mb-6 w-[411px]">
              Subscribe to our newsletter and follow us on social media to stay
              updated on the latest industry trends, Guideline Buddy news, and
              exclusive insights.
            </p>
          </div>
          <div className="w-[582px] bg-white py-2 flex justify-between items-center rounded-[50px] p-[6.5px] pl-[34px]">
            <input
              type="text"
              placeholder="Search blogs"
              className="text-base placeholder:text-base text-[#6B7280] placeholder:text-[#6B7280]"
              style={{ outline: "none" }}
            />
            <Button title="SignUp" href="/" className="text-base py-[14px]" />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-end">
          <div className="flex gap-4">
            <FaInstagram className="w-11 h-11  text-white" />
            <FaFacebook className="w-11 h-11  text-white" />
            <FaLinkedin className="w-11 h-11  text-white" />
          </div>
          <h5 className="text-white font-atkinsonHyperlegible">
            Follow us on socials
          </h5>
        </div>
      </div>

      <div className="container">
        <div className="bg-[#5C5959] h-[1px]"></div>
        <div className="flex justify-between items-center  py-12">
          <p className="text-base">
            2023 Guideline Buddy. All rights reserved.
          </p>
          <div className="text-base flex gap-8 justify-between ">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Resources</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
