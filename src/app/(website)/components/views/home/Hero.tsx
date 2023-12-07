import Image from "next/image";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div className='relative h-full lg:h-[calc(100vh-108px)] 2xl:h-[calc(100vh-130px)]'>
      <div className='h-full hidden xl:block'>
        <div className='  h-full  container flex justify-center xl:justify-start xl:items-center'>
          <div className='  w-[600px]  2xl:w-[728px]'>
            <h3>Your Mortgage Compass for the Digital Age</h3>
            <p className='mb-10'>Empowering professionals, enabling dreams</p>
            <Button title='Start Today!' href='/' className='bg-[#5437CC]' />
          </div>
        </div>

        <div className=' absolute top-1/2 -translate-y-1/2 right-0'>
          <div className='relative h-[243px] lg:h-[360px]  2xl:h-[479px] aspect-video'>
            <Image
              className='object-contain object-right'
              src='/assets/images/hero.png'
              fill
              alt='Hero Banner'
            />
          </div>
        </div>
      </div>

      <div className='h-full xl:hidden'>
        <div className='container flex flex-col  gap-10 pt-[76px] pb-32 '>
          <div className='relative w-[366px] md:w-[668px] h-[243px] md:h-[479px]'>
            <Image src='/assets/images/hero.png' fill alt='Hero Banner' />
          </div>
          <div className=''>
            <h3>Your Mortgage Compass for the Digital Age</h3>
            <p className='mb-10'>Empowering professionals, enabling dreams</p>
            <Button title='Start Today!' href='/' className='bg-[#5437CC]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
