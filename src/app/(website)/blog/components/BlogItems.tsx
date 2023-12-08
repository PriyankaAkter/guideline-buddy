import React from "react";
import { blogs } from "../../components/shared/data";
import { Type } from "@/app/types/types";
import Image from "next/image";
import BlogCard from "../../components/shared/BlogCard";

const BlogItems = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[60px] mt-20 xl:mt-[156px] '>
      {blogs?.map((blog: Type) => (
        <BlogCard key={blog?.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogItems;
