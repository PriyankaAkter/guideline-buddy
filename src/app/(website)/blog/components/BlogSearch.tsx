import Button from "@/app/(website)/components/shared/Button";
import React from "react";
import BlogTag from "./BlogTag";

const BlogSearch = () => {
  const numberOfTags = 5;
  const tagsArray = new Array(numberOfTags).fill(null);

  const numberOfTags2 = 4;
  const tagsArray2 = new Array(numberOfTags2).fill(null);
  return (
    <div className="container grid place-items-center ">
      <div className="w-[582px] border border-[#111827] bg-[#F9F6FF] py-2 flex justify-between items-center rounded-[50px] pr-[11px] pl-[34px]">
        <input
          type="text"
          placeholder="Search blogs"
          className="bg-inherit text-base placeholder:text-base text-[#6B7280] placeholder:text-[#6B7280]"
          style={{ outline: "none" }}
        />
        <Button
          title="Search"
          href="/"
          className="md:text-base py-[14px] px-9"
        />
      </div>
      <div className="mt-[76px] grid grid-cols-5 gap-5">
        {tagsArray.map((_, index) => (
          <BlogTag key={index} title={`Subject Tag`} />
        ))}
      </div>
      <div className="mt-[76px] grid grid-cols-4 gap-5 place-items-center">
        {tagsArray2.map((_, index) => (
          <BlogTag key={index} title={`Subject Tag`} />
        ))}
      </div>
    </div>
  );
};

export default BlogSearch;
