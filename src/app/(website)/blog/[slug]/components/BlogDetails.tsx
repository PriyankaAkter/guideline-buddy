import Image from "next/image";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";

const BlogDetails = () => {
  return (
    <div className="container pt-44 ">
      <div className="relative w-[1640px] h-[917px] mb-20">
        <Image
          className="object-contain"
          src="/assets/images/blog-details1.png"
          fill
          alt="Blog-Details"
        />
      </div>
      <div className="w-[1084px] mx-auto">
        <h1>Blog Post Title Overlay Here</h1>
        <div className="flex gap-10 mb-10">
          <h6>Date: Thur. Aug. 12, 2023</h6>
          <h6>Author: John Doe</h6>
        </div>
        <div className="mb-24">
        <h5 className="text-[36px] mb-5">Subheading</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
          Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim
          eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Curabitur sed commodo leo.
          Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere,
          ut rhoncus velit eleifend.
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
          Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim
          eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Curabitur sed commodo leo.
          Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere,
          ut rhoncus velit eleifend.
        </p>
        </div>
        <div className="mb-24">
        <h5 className="text-[36px] mb-5">Subheading</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
          Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim
          eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Curabitur sed commodo leo.
          Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere,
          ut rhoncus velit eleifend.
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices.
          Vestibulum et neque id ex semper varius a sit amet metus. Vivamus
          congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas.
          Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim
          eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Curabitur sed commodo leo.
          Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere,
          ut rhoncus velit eleifend.
        </p>
        </div>
        <div className="flex gap-6">
         <p>Share on socials</p>
         <div className="flex gap-4">
            <div className="bg-[#F3F4F6] p-[6px] rounded-full w-fit">
            <FaFacebookF  />
            </div>
            <div className="bg-[#F3F4F6] p-[6px] rounded-full w-fit">
            <RiInstagramFill />
            </div>
            <div className="bg-[#F3F4F6] p-[6px] rounded-full w-fit">
            <IoLogoYoutube />
            </div>
            <div className="bg-[#F3F4F6] p-[6px] rounded-full w-fit">
            <FaLinkedinIn  />
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
