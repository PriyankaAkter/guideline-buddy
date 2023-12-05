import React from 'react'
import { blogs } from '../../components/shared/data'
import { BlogType } from '@/app/types/types'
import Image from 'next/image'
import BlogCard from '../../components/shared/BlogCard'

const BlogItems = () => {
  return (
    <div className='grid grid-cols-3 gap-[60px] px-[141px]'>
      {
        blogs?.map((blog:BlogType)=>(
            <BlogCard key={blog?.id} blog={blog} />
        ))
      }
    </div>
  )
}

export default BlogItems