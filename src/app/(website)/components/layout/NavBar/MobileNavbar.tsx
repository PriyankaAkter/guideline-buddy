"use client";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu, BiX } from "react-icons/bi";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="bg-white 2xl:hidden py-5 w-screen">
      <nav className="grid grid-cols-1 container gap-4 ">
        <div className="flex justify-between items-center">
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <BiX className="w-6 2xl:w-8 h-6 2xl:h-8 text-primary" />
            ) : (
              <BiMenu className="w-6 md:w-8 h-6 md:h-8 text-primary" />
            )}
          </div>
          <Link href='/' className="flex justify-center items-center gap-2">
          <div className="relative w-[146px] h-[22px] ">
            <Image src="/assets/images/logo1.png" fill alt="logo" />
          </div>
            
          </Link>

          <div className="w-8 md:w-[56px] h-8 md:h-[56px] relative rounded-full p-2 bg-primary flex justify-center items-center">
            <AiOutlineShoppingCart className="text-white w-7 h-7" />
          </div>
        </div>
        

        <div className={clsx("py-32 h-screen", open ? "block" : "hidden")}>
        <Link href="/">HOME</Link>
             <Link href="/about">ABOUT</Link>
             <Link href="/features">FEATURES</Link>
             <Link href="/pricing">PRICING</Link>
             <Link href="/blog">BLOG</Link>
             <Link href="/contact">CONTACT</Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;