import React from 'react'
import { sponser } from '../../shared/data'
import Image from 'next/image'

const HomeSponser = () => {
    
  return (
    <div className='container  flex justify-between'>
      {
        sponser?.map((s:any)=>(
            <div className="relative w-[338px] h-[80px]" key={s?.id}>
          <Image src={s?.image} fill alt="feature" className="rounded-[60px] object-contain" />
        </div>
        ))
      }
    </div>
  )
}

export default HomeSponser