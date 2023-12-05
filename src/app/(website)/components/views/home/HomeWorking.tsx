import React from "react";

import Image from "next/image";
import { items } from "../../shared/data";

type WorkType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const HomeWorking = () => {
  return (
    <div className="px-[168px] ">
      <h3 className="max-w-[846px]  mx-auto text-center">
        Working with Guideline Buddy means working with:
      </h3>

      <div className="grid grid-cols-3 gap-20 relative mt-40 h-[528px]">
        {items?.map((item: WorkType) => (
          <div
            key={item?.id}
            className="px-[50px] flex flex-col items-center gap-12 bg-[#D1C9F1] rounded-[60px] "
          >
            <div className="relative w-[157px] h-[157px]  -top-[80px] ">
              <Image src="/assets/images/img1.png" fill alt="image" />
            </div>
            <div className="flex flex-col items-center gap-6 relative -top-[80px]  ">
              <h5>{item?.title}</h5>
              <p className="text-center w-[335px]">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWorking;