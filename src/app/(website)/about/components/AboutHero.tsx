import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="mx-6">
      <div className="w-[998px] mx-auto my-40">
        <h1> Guideline Buddy: AI Powered, Human Driven </h1>
      </div>

      <div className="grid grid-cols-2 gap-16 py-32 pl-44 pr-28  text-white bg-[#5437CC] rounded-[60px] w-full ">
        <div className="flex flex-col justify-center gap-5 sb">
          <h3>
            Two-to-three line overview of the technology/service Guideline Buddy
            implements
          </h3>
          <p>
            At Guideline Buddy, we're more than just a tech-driven solution in
            the mortgage industry. We're a passionate team dedicated to changing
            the way professionals navigate the complexities of the mortgage
            landscape all while making home ownership more accessible and
            inclusive for all. 
          </p>
          <Link
            href="/"
            className="rounded-[33px]  text-xl  text-white px-12 py-3 w-fit"
            style={{
              background:
                "linear-gradient(90deg, #EAB9F0 -14.08%, #DA61E6 120.17%)",
            }}
          >
            Get Started
          </Link>
        </div>
        <div className="sb w-[626px] h-626px] relative">
          <Image src="/assets/images/about3.png" fill alt="iamge" />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
