import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DesktopNavbar = () => {
  return (
    <div className="hidden 2xl:block ">
      <nav className="flex justify-between items-center container py-10">
        <Link href="/" className="flex justify-center items-center gap-2">
          <div className="w-[320px] h-[49px] relative rounded-2xl">
            <Image
              alt="Images"
              src="/assets/images/logo1.png"
              fill
              className="object-contain"
            />
          </div>
          
        </Link>
        <div className="flex justify-between items-center gap-[60px] text-[#5437CC] text-[18px] font-bold font-poppins">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricings</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        
          
        
      </nav>
    </div>
  )
}

export default DesktopNavbar