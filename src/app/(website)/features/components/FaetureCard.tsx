import Image from "next/image";
import React from "react";
import Button from "../../components/shared/Button";


type featureCardType = {
    title: string,
    subTitle: string, 
    image: string, 
    link?: string
}

const FeatureCard = ({title,subTitle, image, link}:featureCardType) => {
  return (
    <div
      className="w-full "
      style={{
        background: "url(/assets/images/bg.png)",
        // backgroundPosition:"center",
        backgroundSize: "cover",
      }}
    >
      <div className="container grid grid-cols-2 items-center">
        <div className="w-[728px]">
          <h2 className="mb-7">{title}</h2>
          <p className="mb-20 text-[#6B7280] text-[18px]">
            {subTitle}
          </p>
          <Button
            href="/"
            title="Start Searching"
            className="py-[14px] px-14 w-fit "
          />
        </div>
        <div className="relative w-[911px] h-[651px] 2xl:w-[980px]">
          <Image src={image} fill alt="feature" className="rounded-[60px]" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
