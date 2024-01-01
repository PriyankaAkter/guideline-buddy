import BlogCard from "@/app/(website)/components/shared/BlogCard";
import { blogs } from "@/app/(website)/components/shared/data";
import { Type } from "@/app/types/types";
import React from "react";

const PricingBlog = () => {
    const sliceBlogs = blogs?.slice(0,3)
  return (
    <div className="pb-48  container">
<h1 className="text-center">Discover the Latest Mortgage Insights</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-[60px] gap-y-[200px] mt-20">
      {sliceBlogs?.map((blog: Type) => (
          <BlogCard key={blog?.id} blog={blog} />
          ))}
    </div>
          </div>
  );
};

export default PricingBlog;
