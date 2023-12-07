import Image from "next/image";
import React from "react";

const FeatureNotice = () => {
  return (
    <div className='mt-20 xl:mt-40'>
      <div className='container bg-[#D1C9F1] rounded-[20px] xl:rounded-[60px] mx-auto'>
        <div className=' grid grid-cols-1  2xl:grid-cols-2 place-items-center xl:gap-28  py-2 sm:py-10 xl:py-36 container'>
          <div className='w-full 2xl:w-[728px]  '>
            <h3>
              ¡Atención! Profesionales que prefieren hablar Español! Buenas
              noticias:
            </h3>
            <p className='mb-10'>
              Buddy también domina el Español. Ofrece todas las mismas
              características y capacidades que en Inglés. Así que, ya sea que
              quieras comunicarte o aprovechar al máximo sus funcionalidades,
              Buddy te tiene cubierto en Español.
            </p>
          </div>
          <div className='relative w-full 2xl:h-[549px] aspect-[88/61]'>
            <Image src='/assets/images/f4.png' fill alt='iamge' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureNotice;
