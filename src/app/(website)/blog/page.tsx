import React from "react";
import BlogItems from "./components/BlogItems";
import BlogHero from "./components/BlogHero";
import BlogSearch from "./components/BlogSearch";

const Page = () => {
  return (
    <div className=''>
      <BlogHero />
      <BlogSearch />
      <BlogItems />
    </div>
  );
};

export default Page;
