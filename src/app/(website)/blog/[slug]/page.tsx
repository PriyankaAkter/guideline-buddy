import React from 'react'
import BlogDetails from './components/BlogDetails'
import BlogReading from './components/BlogReading'
import BlogComments from './components/BlogComments'

const Page = () => {
  return (
    <div>
        <BlogDetails />
        <BlogReading />
        
        <BlogComments />
    </div>
  )
}

export default Page