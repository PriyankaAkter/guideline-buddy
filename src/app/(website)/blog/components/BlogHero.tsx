import Image from "next/image";
import React from "react";
import Button from "../../components/shared/Button";

const BlogHero = () => {
  return (
    <div className="container">
      <h1 className="text-center pt-44">Discover the Latest Mortgage Insights</h1>
      <div className="grid gap-[108px] grid-cols-2 items-center py-48">
        <div className="relative w-[794px] h-[641px]">
          <Image
            // className="object-contain"
            src="/assets/images/blog1.png"
            fill
            alt="Client"
          />
        </div>
        <div>
          <h2>Here is a title to highlight <br />the featured article</h2>
          <div className="flex gap-10 mb-10">
            <h6>Date: Thur. Aug. 12, 2023</h6>
            <h6>Author: John Doe</h6>
          </div>
          <p className="mb-10 ">
            Here is a description of the featured blog article to give <br />viewers a
            glimpse into the subject matter. Make it engaging <br />and don’t give too
            much away so that they want to read <br />more.
          </p>
          <Button href="/" title="Read More" />
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
