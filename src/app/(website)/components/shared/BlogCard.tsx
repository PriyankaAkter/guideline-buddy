import { Type } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDevices } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

type BlogCardType = {
  blog: Type;
};

const BlogCard: React.FC<BlogCardType> = ({ blog }) => {
  return (
    <div className="grid gap-8  ">
      <div className="relative w-[506px]   h-[457px]  ">
        <Image src={blog?.image} fill alt="iamge" />
      </div>
      <div className="grid gap-6 px-3">
        <h4 className="">{blog?.title}</h4>

        <p className="text-2xl ">{blog?.description}</p>
        <Link href='/' className="flex justify-end">
          <FaArrowRightLong className="text-[#5C5959] w-9 h-9 " />
        </Link>
        <hr className="text-[#5C5959]" />
        {/* <div className="w-[453px] h-[4px] text-[#5C5959]"></div> */}
      </div>
    </div>
  );
};

export default BlogCard;
