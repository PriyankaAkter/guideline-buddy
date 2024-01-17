import Button from "@/app/(website)/components/shared/Button";
import Image from "next/image";
import React from "react";

const BlogComments = () => {
  return (
    <div className=" container pb-[200px]">
      <div className="bg-[#D1C9F1] rounded-[20px] 2xl:rounded-[60px] pt-[76px] pl-28 pr-36 pb-24 ">
        <p className="tracking-[1.8px] text-xl font-medium text-[#0F1114] mb-2">
          25 Comments
        </p>
        <div className="h-[1.5px] w-full bg-[#09001A]"></div>
        <div className="w-[582px] h-[180px] border border-[#111827] bg-white rounded-[30px] pt-5 pb-4 pl-7 pr-4 flex flex-col justify-between mt-14 mb-[160px]">
          <input
            placeholder="Share Your Thoughts.."
            className="text-base text-[#6B7280] placeholder:text-base placeholder:text-[#6B7280]"
            style={{ outline: "none" }}
          />
          <Button href="/" title="Submit" className="w-fit ml-auto py-[14px]" />
        </div>
        <div>
          <div>
            <div className="flex gap-9 ">
              <div className="relative w-[250px] h-[260px] ">
                <Image
                  className="w-full h-full object-contain"
                  src="/assets/images/customer1.png"
                  fill
                  alt="customer"
                />
              </div>
              <div className="flex-1 w-[1084px] pt-8">
                <h4 className="text-[#111827] font-medium">Courtney Henry</h4>
                <h6 className="text-[#6B7280] mt-4">
                  Date: Thur. Aug. 12, 2023 at 12:34pm
                </h6>
                <p className="mt-10 text-2xl text-[#374151]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <p className="mt-10 text-xl font-medium">Reply</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="relative w-[38.5px] h-[208px] ">
                <Image
                  className="w-full h-full object-contain"
                  src="/assets/images/arrow.png"
                  fill
                  alt="arrow"
                />
              </div>
              <div className="flex gap-9 w-[1341px] mt-16">
                <div className="relative w-[250px] h-[260px] ">
                  <Image
                    className="w-full h-full object-contain"
                    src="/assets/images/customer2.png"
                    fill
                    alt="customer"
                  />
                </div>
                <div className="flex-1 w-[1084px] pt-8">
                  <h4 className="text-[#111827] font-medium">Darrell Steward</h4>
                  <h6 className="text-[#6B7280] mt-4">
                  Date: Mon. Aug. 12, 2023 at 12:00pm
                  </h6>
                  <p className="mt-10 text-2xl text-[#374151]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ligula nibh, interdum non enim sit amet, iaculis
                    aliquet nunc. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                  </p>
                  <p className="mt-10 text-xl font-medium">Reply</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-9  mt-32">
            <div className="relative w-[250px] h-[260px] ">
              <Image
                className="w-full h-full object-contain"
                src="/assets/images/customer3.png"
                fill
                alt="customer"
              />
            </div>
            <div className="flex-1 w-[1084px] pt-8">
              <h4 className="text-[#111827] font-medium">Kristin Watson</h4>
              <h6 className="text-[#6B7280] mt-4">
                Date: Thur. Aug. 12, 2023 at 12:34pm
              </h6>
              <p className="mt-10 text-2xl text-[#374151]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ligula nibh, interdum non enim sit amet, iaculis aliquet nunc.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.{" "}
              </p>
              <p className="mt-10 text-xl font-medium">Reply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComments;
