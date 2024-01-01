import { blogs } from "../../components/shared/data";
import { Type } from "@/app/types/types";
import BlogCard from "../../components/shared/BlogCard";

const BlogItems = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-[60px] gap-y-[200px] py-48  container'>
      {blogs?.map((blog: Type) => (
        <BlogCard key={blog?.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogItems;
