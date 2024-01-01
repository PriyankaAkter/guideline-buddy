import Image from "next/image";
import React from "react";
import Button from "../../components/shared/Button";

const AboutFounder = () => {
  return (
    <div className="py-[200px] grid grid-cols-2 gap-28 place-items-center">
      <div className="relative w-[794px] h-[641px]">
        <Image
          className="object-contain"
          src="/assets/images/founder1.png"
          fill
          alt="Client"
        />
      </div>
      <div className="">
        <h2 className="text-[#111827] mb-3">Marc Hernandez</h2>
        <h5 className="text-[#0F1114] mb-10 traking-[1.2px]">Founder</h5>
        <h5 className="text-[#6B7280] mb-16">
          With a passion for empowering under-served and minority communities,
          Marc has built an impressive career spanning two decades as an
          accomplished mortgage banking executive, consistently demonstrating
          his commitment to breaking down barriers in the financial industry.{" "}
          <br /> <br />
          Marc is a member of the National Association of Hispanic <br />
          Real Estate Professionals (NAHREP) and actively promotes homeownership
          in underserved communities. He has also served as President of the
          Illinois Mortgage Bankers , <br />
          Association (IMBA) in 2017.
        </h5>
        <Button href="/" title="Learn More About Marc" />
      </div>
    </div>
  );
};

export default AboutFounder;
