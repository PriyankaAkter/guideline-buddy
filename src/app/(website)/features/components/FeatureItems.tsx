import { Type } from '@/app/types/types'

import React from 'react'
import { features } from '../../components/shared/data'
import FeatureCard from '../../components/shared/FeatureCard'

const FeatureItems = () => {
  return (
    <div className='container pt-48'>
         <h2 className='text-center'>Guideline Buddy Has Your Back</h2>
         <div className='grid  gap-[60px] mt-[156px]'>
      {
        features?.map((feature:Type)=> (
            <FeatureCard feature={feature} key={feature?.id} />
        ))
      }
    </div>
    </div>
  )
}

export default FeatureItems
