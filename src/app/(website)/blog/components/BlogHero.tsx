import Image from 'next/image'
import React from 'react'

const BlogHero = () => {
  return (
    <div>
      <h3>Here is a title to highlight of a recent article</h3>
      <div className='bg-[#5C5959] w-full h-[2px]'></div>
      <div className="relative w-[998px] h-[662px]  mt-32">
        <Image src="/assets/images/blog1.png" fill alt="iamge" />
      </div>
    </div>
  )
}

export default BlogHero