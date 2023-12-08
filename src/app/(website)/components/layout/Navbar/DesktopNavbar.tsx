import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DesktopNavBar = () => {
  return (
    <div className='flex justify-between items-center container pt-14 sb'>
        <div className="relative w-[449px] h-[68px] ">
            <Image src="/assets/images/logo1.png" fill alt="logo" />
          </div>
          <div className='flex justify-between items-center gap-[69px] text-[#5437CC] text-2xl font-bold font-atkinsonHyperlegible'>
             <Link href="/">HOME</Link>
             <Link href="/about">ABOUT</Link>
             <Link href="/features">FEATURES</Link>
             <Link href="/pricing">PRICING</Link>
             <Link href="/blog">BLOG</Link>
             <Link href="/contact">CONTACT</Link>
          </div>
    </div>
  )
}

export default DesktopNavBar