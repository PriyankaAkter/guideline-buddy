import { Type } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDevices } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";

type BlogCardType = {
  blog: Type;
};

const BlogCard: React.FC<BlogCardType> = ({ blog }) => {
  return (
    <div className="grid gap-10 ">
      <div className="relative w-[506px] h-[457px]">
        <Image src={blog?.image} fill alt="Blog" className="rounded-[40px]" />
      </div>
      <div className="grid">
        <h5 className=" mb-5">{blog?.title}</h5>

        <p className="text-base 2xl:text-[18px] mb-12 text-[#6B7280]">{blog?.description}</p>
        <Button href="/" title="Read More" className="w-fit" />
      </div>
    </div>
  );
};

export default BlogCard;
