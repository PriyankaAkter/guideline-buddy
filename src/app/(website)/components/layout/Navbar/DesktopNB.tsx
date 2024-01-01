'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const DesktopNB = () => {
    const pathname = usePathname()
    console.log({pathname});
    
  return (
    <div
      className="  py-7"
      style={{ boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div className="container flex justify-between items-center">
        <div className="relative w-[297px] h-[44px] ">
          <Image src="/assets/images/logo.png" fill alt="logo" />
        </div>
        <div className="flex justify-between items-center gap-[66px] ">
          <Link href="/" className={` text-2xl font-semibold font-poppins ${pathname==="/" ? 'text-[#C87EDB]':'text-[#240066]'}`}>Home</Link>
          <Link href="/about" className={` text-2xl font-semibold font-poppins ${pathname==="/about" ? 'text-[#C87EDB]':'text-[#240066]'}`}>About Us</Link>
          <Link href="/features" className={` text-2xl font-semibold font-poppins ${pathname==="/features" ? 'text-[#C87EDB]':'text-[#240066]'}`}>Features</Link>
          <Link href="/pricing" className={` text-2xl font-semibold font-poppins ${pathname==="/pricing" ? 'text-[#C87EDB]':'text-[#240066]'}`}>Pricing</Link>
          <Link href="/blog" className={` text-2xl font-semibold font-poppins ${pathname==="/blog" ? 'text-[#C87EDB]':'text-[#240066]'}`}>Blogs</Link>
          <Link href="/contact" className={` text-2xl font-semibold font-poppins ${pathname==="/contact" ? 'text-[#C87EDB]':'text-[#240066]'}`}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNB;
