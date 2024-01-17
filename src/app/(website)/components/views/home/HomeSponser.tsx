import React from 'react'
import { sponser } from '../../shared/data'
import Image from 'next/image'

const HomeSponser = () => {
    
  return (
    <div className='container  flex justify-between items-center'>
      
            <div className="relative w-[338px] h-[77.386px]" >
          <Image src="/assets/images/s1.png" fill alt="feature" className="rounded-[60px] object-contain" />
        </div>
        <div className="relative w-[175.937px] h-[54.236px]" >
          <Image src="/assets/images/s2.png" fill alt="feature" className="rounded-[60px] object-contain" />
        </div>
        <div className="relative w-[208.346px] h-[84px]" >
          <Image src="/assets/images/s3.png" fill alt="feature" className="rounded-[60px] object-contain" />
        </div>
        <div className="relative w-[176.598px] h-[70.11px]" >
          <Image src="/assets/images/s4.png" fill alt="feature" className="rounded-[60px] object-contain" />
        </div>
    </div>
  )
}

export default HomeSponser