import React from "react";
import Button from "../../components/shared/Button";
import Link from "next/link";

const AboutStory = () => {
  return (
    <div className=" my-[192px] ">
      <div className="w-[1115px] mx-auto text-center flex flex-col items-center gap-6 ">
        <h3>Our Story</h3>
        <p className=" text-center">
            Our journey began with a vision to revolutionize the mortgage
          industry. With decades of collective experience in mortgage oversight,
          we witnessed the challenges that professionals faced in accessing and
          comprehending investor guidelines. The traditional methods were
          time-consuming and prone to errors, and we knew there had to be a
          better way. The advent of AI technology presented an incredible
          opportunity, and we set out to create a solution that would simplify
          the mortgage process, making it more efficient, accessible, and
          reliable.
        </p>
        <Link
          href="/"
          className="rounded-[33px]  text-xl  text-white px-12 py-3 w-fit"
          style={{
            background:
              "linear-gradient(90deg, #D385DC -14.08%, #5437CC 120.17%)",
          }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default AboutStory;
