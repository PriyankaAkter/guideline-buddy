import Image from "next/image";
import React from "react";

const FeatureNotice = () => {
  return (
    <div className='container pt-[254px]'>
      <div className=' bg-[#D1C9F1] rounded-[20px] xl:rounded-[60px]'>
        <div className=' grid grid-cols-1 2xl:gap-[147px] 2xl:grid-cols-2 place-items-center py-12 px-[50px] '>
          <div className='w-full   '>
            <h3 className="text-[48px] font-medium">
            ¡Atención! Profesionales que prefieren hablar Español! Buenas noticias:
            </h3>
            <h5 className='mt-[50px] text-[#6B7280]'>
            Buddy también domina el Español. Ofrece todas las mismas características y capacidades que en Inglés. Así que, ya sea que quieras comunicarte o aprovechar al máximo sus funcionalidades, Buddy te tiene cubierto en Español.
            </h5>
          </div>
          <div className='relative w-[690px] h-[549px] '>
            <Image src='/assets/images/f9.png' fill alt='feature' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureNotice;
