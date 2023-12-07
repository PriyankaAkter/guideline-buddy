import Image from "next/image";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div className="container flex flex-col xl:flex-row  xl:justify-between xl:items-center gap-10 pt-[76px] pb-32 xl:pb-[79px] xl:py-36 ">
      <div className="2xl:w-[728px] sb order-last sm:order-first">
        <h3>Your Mortgage Compass for the Digital Age</h3>
        <p className="mb-10">Empowering professionals, enabling dreams</p>
        <Button title="Start Today!" href="/" className="bg-[#5437CC]" />
      </div>
      <div className="relative w-[366px] md:w-[668px] h-[243px] md:h-[479px] ">
        <Image src="/assets/images/hero.png" fill alt="iamge" />
      </div>
    </div>
  );
};

export default Hero;
