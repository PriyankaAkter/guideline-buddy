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
    <div className='grid gap-8  '>
      <div className='relative max-w-[400px] w-full aspect-square  '>
        <Image src={blog?.image} fill alt='Banner' />
      </div>
      <div className='grid  px-3'>
        <h4 className='text-2xl xl:text-[40px] mb-6'>{blog?.title}</h4>

        <p className='text-base xl:text-2xl '>{blog?.description}</p>
        <Link href='/' className='flex justify-end'>
          <FaArrowRightLong className='text-[#5C5959] lg:w-9 lg:h-9 w-5 h-5 ' />
        </Link>
        <hr className='text-[#5C5959]' />
        {/* <div className="w-[453px] h-[4px] text-[#5C5959]"></div> */}
      </div>
    </div>
  );
};

export default BlogCard;
