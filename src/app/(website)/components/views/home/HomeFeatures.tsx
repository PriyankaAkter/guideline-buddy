import React from "react";
import Button from "../../shared/Button";
import Image from "next/image";

const HomeFeatures = () => {
  return (
    <div className=" space-y-20 xl:space-y-[200px]">
      {/* <div className="flex flex-col-reverse 2xl:flex-row justify-between items-center gap-10   xl:gap-0  ">
        <div className="flex-1 xl:min-w-[800px] 2xl:min-w-[900px] 2xl:max-w-[900px] ">
          <div className="container ">
            <h3>Choose Guideline Buddy for a Competitive Edge</h3>
            <p className="mb-10">
              We believe in AI as a partner, not a replacement. Our platform
              bridges the gaps within the mortgage industry, offering a level
              playing field for both tech-savvy newcomers and seasoned
              professionals alike. Learn how our human-centered approach
              empowers you by handling the grunt work, so you can focus on what
              you do best.
            </p>
            <Button
              title="See Our Approach in Action"
              href="/"
              className="bg-[#5437CC]"
            />
          </div>
        </div>

        <div className=" container xl:max-w-full ">
          <div className=" flex justify-start ">
            <div className="  -mr-16 relative w-full sm:h-[340px] md:h-[520px] lg:h-[620px]  2xl:h-[610px] aspect-[17/12]  ">
              <Image
                className="object-contain object-left xl:object-right"
                src="/assets/images/img3.png"
                fill
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="  grid grid-cols-1 xl:grid-cols-2 gap-10  place-items-center  2xl:gap-14 ">
        
        <div className="container xl:w-full   xl:pl-20 ">
          <h3>Choose Guideline Buddy for a Competitive Edge</h3>
          <p className="mb-10">
          We believe in AI as a partner, not a replacement. Our platform
              bridges the gaps within the mortgage industry, offering a level
              playing field for both tech-savvy newcomers and seasoned
              professionals alike. Learn how our human-centered approach
              empowers you by handling the grunt work, so you can focus on what
              you do best.
          </p>
          <Button
            title="See Our Approach in Action"
            href="/"
            className="bg-[#5437CC]"
          />
        </div>
        <div className="container xl:w-full flex justify-end   order-first xl:order-last">
          <div className="xl:-mr-16  relative w-full sm:h-[340px] md:h-[520px] lg:h-[620px]  2xl:h-[610px] aspect-[17/12]">
            <Image
              className="object-contain md:object-right object-left "
              src="/assets/images/img3.png"
              fill
              alt="Banner"
            />
          </div>
        </div>
      </div>
      <div className="  grid grid-cols-1 xl:grid-cols-2 gap-10  place-items-center  2xl:gap-14 ">
        <div className="container xl:w-full  flex justify-start  ">
          <div className="xl:-ml-16  relative w-full sm:h-[340px] md:h-[520px] lg:h-[620px]  2xl:h-[610px] aspect-[17/12]">
            <Image
              className="object-contain object-right md:object-left "
              src="/assets/images/img4.png"
              fill
              alt="Banner"
            />
          </div>
        </div>
        <div className="container xl:w-full xl:text-right  xl:pr-20">
          <h3>Bridging the Gap with Human-Centered AI</h3>
          <p className="mb-10">
            Discover why top mortgage professionals choose Guideline Buddy. From
            advanced AI tools to a commitment to fair lending, we provide the
            competitive edge you need in today&apos;s dynamic market. Explore
            the features that set us apart.
          </p>
          <Button
            title="See Our Approach in Action"
            href="/"
            className="bg-[#5437CC]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
