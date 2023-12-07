import Image from 'next/image'
import React from 'react'
import Button from '../../components/shared/Button'

const FeatureHero = () => {
  return (
    <div className="grid gap-24 2xl:gap-[200px] container pt-20 2xl:pt-36 pb-[140px] 2xl:pb-[185px]">
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-14 2xl:gap-[111px] 2xl:place-items-center ">
        <div className="order-last 2xl:order-first  ">
          <h3>
          Looking for investor <br />and lender guidelines?
          </h3>
          <h5 className='mt-8 mb-4 font-semibold'>Say hello to Buddy, our AI chatbot!</h5>
          <p className="mb-10">
          He's got your back. Just tell him what you need, and he'll give you a quick summary with all the info you're looking for. Easy peasy, right? Go ahead, ask away!
            best.
          </p>
          
        </div>
        <div className="relative w-[366px] md:w-[730px] lg:w-full h-[239px] lg:h-[509px] ">
          <Image src="/assets/images/feature1.png" fill alt="iamge" />
        </div>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-14 2xl:gap-[111px] 2xl:place-items-center ">
      <div className="relative w-[366px] md:w-[730px] lg:w-full h-[239px] lg:h-[509px] ">
          <Image src="/assets/images/feature2.png" fill alt="iamge" />
        </div>
        <div className="">
          <h3>
          The right answers <br />right at your fingertips
          </h3>
          <p className="mb-10">
          Make sure you stay in the loop with real-time updates on investor guidelines. Plus, you'll get notifications whenever there are changes, so you're never caught off guard. It's like having all the information you need, right when you need it!
          </p>
        
        </div>
        
      </div>
    </div>
  )
}

export default FeatureHero