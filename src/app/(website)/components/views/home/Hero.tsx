import Image from "next/image";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div
      className="w-full pt-[78px] pb-[160px]"
      
    >
      <div className="container grid grid-cols-2 items-center gap-[211px] ">
        <div className="w-[630px]">
          <h2 className="mb-10">The Fastest and Easiest Way to Search Mortgage Guidelines</h2>
          <p className="mb-20 text-[#6B7280] text-[18px]">
          Get the information you need in seconds with our AI chatbot, Buddy. He finds exactly what you’re looking for and gives you the answer in simple terminology.
          </p>
          <Button
            href="/"
            title="Start Searching!"
            className="py-[14px] px-14 w-fit "
          />
        </div>
        <div className="relative w-[880px] h-[651px] ">
          <Image src='/assets/images/hero1.png' fill alt="feature" className="rounded-[60px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
