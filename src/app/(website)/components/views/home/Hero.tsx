import Image from "next/image";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div
      className="w-full pt-[78px] pb-[160px]"
      
    >
      <div className="container grid grid-cols-2 items-center ">
        <div className="w-[630px]">
          <h2 className="mb-10">The Fastest and <br />Easiest Way to <br />Search Mortgage Guidelines</h2>
          <p className=" mb-20 text-[#6B7280] text-[18px]">
          Get the info you need for your loan scenario in <br />seconds with Buddy, our AI-powered chatbot! Just <br />ask him what you're looking for, and he'll find the <br />exact guideline and give you the right answer in <br />plain language.

          </p>
          <Button
            href="/pricing"
            title="Start Searching!"
            className="py-[14px] px-14 w-fit "
          />
        </div>
        <div className="relative w-[978px] h-[651px] ">
          <Image src='/assets/images/hero1.png' fill alt="feature" className="rounded-[60px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
