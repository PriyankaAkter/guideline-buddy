import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className='mx-6 '>
      <div className='max-w-[980px] mx-auto text-center my-20 2xl:my-40'>
        <h1> Guideline Buddy: AI Powered, Human Driven </h1>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-16 py-8 xl:py-32 px-4 xl:px-20 2xl:pl-44 2xl:pr-28  text-white bg-[#5437CC] rounded-[20px] xl:rounded-[60px] w-full '>
        <div className='flex flex-col justify-center gap-5'>
          <h3>
            Two-to-three line overview of the technology/service Guideline Buddy
            implements
          </h3>
          <p>
            At Guideline Buddy, we&apos;re more than just a tech-driven solution
            in the mortgage industry. We&apos;re a passionate team dedicated to
            changing the way professionals navigate the complexities of the
            mortgage landscape all while making home ownership more accessible
            and inclusive for all. 
          </p>
          <Link
            href='/'
            className='rounded-[33px]  text-xl  text-white px-12 py-3 w-fit'
            style={{
              background:
                "linear-gradient(90deg, #EAB9F0 -14.08%, #DA61E6 120.17%)",
            }}
          >
            Get Started
          </Link>
        </div>
        <div className=' aspect-square h-626px] relative'>
          <Image src='/assets/images/about3.png' fill alt='iamge' />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
