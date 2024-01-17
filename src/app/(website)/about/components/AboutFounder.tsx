import Image from "next/image";
import React from "react";
import Button from "../../components/shared/Button";

const AboutFounder = () => {
  return (
    <div className=" grid grid-cols-2 gap-28 items-center  py-[200px] ">
      <div className="relative w-[794px] h-[738px] ">
        <Image
          className="object-contain rounded-[30px]"
          src="/assets/images/founder1.png"
          fill
          alt="Client"
        />
      </div>
      <div className="">
        <h2 className="text-[#111827] mb-3">Marc Hernandez</h2>
        <h5 className="text-[#0F1114] mb-10 traking-[1.2px]">Founder</h5>
        <h5 className="text-[#6B7280] font-normal mb-16">
        With an unwavering dedication to empowering underserved and minority communities, Marc has embarked on an extraordinary two-decade journey as a trailblazing executive in the mortgage banking industry. Continuously shattering barriers, he has earned prestigious recognition, including being honored as a Rising Star by HousingWire. 

Marc's commitment to his craft is evident through his more than decade-long membership with the National Association of Hispanic Real Estate Professionals (NAHREP) and his influential role as President of the Illinois Mortgage Bankers Association (IMBA). Notably, Marc proudly holds the esteemed Certified Mortgage Banker (CMB) designation and has successfully completed the Future Leaders program from the Mortgage Bankers Association (MBA).
        </h5>
        <Button href="/" title="Learn More About Marc" />
      </div>
    </div>
  );
};

export default AboutFounder;
