import Image from "next/image";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div className='relative h-full xl:h-[calc(100vh-280px)] 2xl:h-[calc(100vh-130px)] '>
      <div className='h-full hidden xl:block'>
        <div className='  h-full  container flex justify-center  xl:justify-start xl:items-center ' >
          <div className='  w-[600px]  2xl:w-[728px]'>
            <h3>Your Mortgage Compass for the Digital Age</h3>
            <p className='mb-10'>Empowering professionals, enabling dreams</p>
            <Button title='Start Today!' href='/' className='bg-[#5437CC]' />
          </div>
        </div>

        <div className=' absolute top-1/2 -translate-y-1/2 right-0 xl:-mr-16'>
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

      <div className=' h-full lg:h-[540px] xl:hidden  mx-3 md:mx-6  lg:mx-[80px] '>
        <div className='  flex flex-col lg:flex-row lg:items-center  gap-10 pt-[76px]  pb-32 lg:pb-0  '>
          <div className='relative w-full  h-[290px] sm:h-[340px] md:h-[520px] lg:h-[340px]   2xl:h-[610px] '>
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
