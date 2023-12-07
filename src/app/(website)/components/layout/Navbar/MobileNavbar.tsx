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
    <div className="bg-white 2xl:hidden py-5 w-screen ">
      <nav className="grid grid-cols-1 container gap-4 sb">
        <div className="flex justify-between items-center sb py-4">
          <Link href="/" className="flex justify-center items-center gap-2">
            <div className="w-[146px] h-[22px] relative ">
              <Image
                alt="Logo"
                src="/assets/images/logo1.png"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <BiX className="w-6 2xl:w-8 h-6 2xl:h-8 text-[#5437CC]" />
            ) : (
              <BiMenu className="w-6 md:w-8 h-6 md:h-8 text-[#5437CC]" />
            )}
          </div>
        </div>

        <div className={clsx("py-32 h-screen", open ? "flex flex-col items-center gap-6 text-xl text-[#5437CC] font-bold" : "hidden") }>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricings</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
