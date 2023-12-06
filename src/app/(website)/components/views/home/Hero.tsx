
import Image from "next/image";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div className="flex  justify-between items-center gap-10  py-36 container">
      <div className="w-[728px] sb ">
        <h3>Your Mortgage Compass for the Digital Age</h3>
        <p className="mb-10">Empowering professionals, enabling dreams</p>
        <Button title="Start Today!" href="/" className="bg-[#5437CC]" />
      </div>
      <div className="relative w-full md:w-[668px] h-[479px] ">
        <Image src='/assets/images/hero.png' fill alt="iamge" />
      </div>
    </div>
  );
};

export default Hero;
