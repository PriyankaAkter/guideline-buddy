import Image from "next/image";
import React from "react";

const HomeInnovation = () => {
  return (
<div className="bg-[#5437CC] xl:pl-0 xl:pr-[75px] py-9 xl:py-16 xl:mr-[75px] flex flex-col xl:flex-row justify-center px-8 xl:items-center xl:justify-between gap-20 rounded-br-[300px] rounded-bl-[300px] xl:rounded-bl-none xl:rounded-tr-[557px] xl:rounded-br-[557px]">
  <h2 className="xl:w-[80%] max-w-[663px] text-white sb">Unleash the Power of Innovation in Mortgage Lending</h2>
  <div className="relative w-[318px] h-[318px] xl:w-[80%] xl:max-w-[768px] xl:h-[50vw]">
    <Image src="/assets/images/img2.png" fill alt="image" />
  </div>
</div>
  );
};

export default HomeInnovation;
// xl:mr-[75px] xl:pl-0  xl:pr-[75px] py-9 xl:py-16  flex flex-col xl:flex-row justify-center px-8 xl:items-center xl:justify-between gap-20 rounded-br-[300px] rounded-bl-[300px] xl:rounded-bl-none xl:rounded-tr-[557px] xl:rounded-br-[557px] max-w-[1780px]