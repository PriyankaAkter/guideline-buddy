

import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { BiRightArrowAlt } from "react-icons/bi";
type ButtonType = {
  href: string,
  className?: string,
  title: string,
  style?:string
}

const Button = (props:ButtonType) => {
  return (
    <Link
   
      href={props.href}
      className={twMerge("rounded-[33px] text-base  md:text-xl  text-white px-5 md:px-8 py-2",
        props?.className
      )}
     
    >{props.title}
      
    </Link>
  );
};

export default Button;