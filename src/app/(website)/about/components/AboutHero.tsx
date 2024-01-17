import Image from "next/image";
import Button from "../../components/shared/Button";


const AboutHero = () => {
  return (
    <div className="mx-3 ">
      <div className="w-full text-center my-20 2xl:my-40">
        <h1>
           Simplifying Mortgage, <br />
          Amplifying Results 
        </h1>
      </div>
      <div
      className="flex 2xl:gap-28 pl-[111px] pr-5 py-32 rounded-[60px] relative"
      style={{
        background: 'linear-gradient(96deg, #28099F 51.52%, #56259F 156.56%)',
        
      }}
    >
      {/* Pseudo-element to create overlay with linear gradient */}
      <div
        className="w-full h-full rounded-[60px] absolute inset-0"
        style={{
          background: "url('/assets/images/about1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: "1",
        
        }}
      ></div>

      <div className="w-[769px] relative z-10">
        <h1 className="mb-6 text-[#F8F6F8]">
          Join us as we reshape the mortgage industry.
        </h1>
        <h5 className="mb-10 text-[#F8F6F8] font-normal">
          At Guideline Buddy, we're more than just a tech-driven solution in
          the mortgage industry. We're a passionate team dedicated to changing
          the way professionals navigate the complexities of the mortgage
          landscape all while making home ownership more accessible and
          inclusive for all.
        </h5>
        <Button
            href="/pricing"
            title="Start Searching!"
            className="py-[14px]  w-fit "
          />
      </div>

      <div className="w-[626px] h-[626px] relative z-10">
        <Image src="/assets/images/about3.png" fill alt="image" />
      </div>
    </div>
    </div>
  );
};

export default AboutHero;
