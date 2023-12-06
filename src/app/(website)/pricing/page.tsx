import React from 'react'
import Hero from './components/Hero'
import Industry from './components/Industry'
import Pricing from './components/Pricing'

const Page = () => {
  return (
    <div className='sb'>
        <Hero />
        <Pricing/>
        <Industry />
    </div>
  )
}

export default Page