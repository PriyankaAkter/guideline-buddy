"use client";
import Accordion from "../../shared/Accordion";
const items = [
  {
    title:
      "So, what's the deal with Guideline Buddy? How can he actually help me out?",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  },
  {
    title: "Who can benefit the most from using Guideline Buddy, you may ask?",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  },
  {
    title:
      "So, how does Guideline Buddy make sure that the guidelines are always up-to-date?",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  },
  {
    title:
      "Hey, are there any resources out there to help me get started with Guideline Buddy?",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  },
  {
    title: "How secure is my data and information when using Guideline Buddy?",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  },
  {
    title: "What kind of customer support does Guideline Buddy offer, you ask?",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  },
  // Add more sections as needed
];
const HomeAccordion = () => {
  return (
    <div className="container mx-auto  flex flex-col 2xl:flex-row">
      <h3 className="w-full 2xl:w-[750px] text-center 2xl:text-left  ">Got Questions? <br />We’ve Got Answers.</h3>
      <div className="pt-16 2xl:pt-0 pb-36">
        <h5 className="text-3xl text-[#5437CC] font-bold mb-4">
          Frequently Asked Questions
        </h5>
        <div className="h-[2px] bg-[#5437CC]"></div>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default HomeAccordion;
