import React, { CSSProperties } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { BiRightArrowAlt } from "react-icons/bi";

type ButtonType = {
  href: string;
  className?: string;
  title: string;
  style?: CSSProperties | string ; 
};

const Button = (props: ButtonType) => {
  return (
    <Link
      href={props.href}
      className={twMerge(
        "rounded-[33px] text-base md:text-xl text-white py-4 px-[26px]",
        props?.className
      )}
      style={{
        background:
          "linear-gradient(276deg, #4B30BA -9.31%, #D950E8 105.83%)",
      }} 
    >
      {props.title}
    </Link>
  );
};

export default Button;
