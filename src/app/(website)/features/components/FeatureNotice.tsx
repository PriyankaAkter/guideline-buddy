import Image from 'next/image'
import React from 'react'

const FeatureNotice = () => {
  return (
    <div className='w-[1790px] bg-[#D1C9F1] mt-64 rounded-[60px] mx-auto'>
       <div className=" grid grid-cols-2 place-items-center gap-28  py-36 container">
      <div className="w-[728px]  ">
        <h3>¡Atención! Profesionales que prefieren hablar Español! Buenas noticias:</h3>
        <p className="mb-10">Buddy también domina el Español. Ofrece todas las mismas características y capacidades que en Inglés. Así que, ya sea que quieras comunicarte o aprovechar al máximo sus funcionalidades, Buddy te tiene cubierto en Español.

</p>
        
      </div>
      <div className="relative w-full md:w-[792px] h-[549px] ">
        <Image src='/assets/images/f4.png' fill alt="iamge" />
      </div>
    </div>
    </div>
  )
}

export default FeatureNotice