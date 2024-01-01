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
];
const HomeAccordion = () => {
  return (
    <div className="container pb-[200px]">

    
    <div
      className="rounded-[185px] py-[136px] px-[245px] "
      style={{
        background: "linear-gradient(288deg, #5437CC 58.09%, #D385DC 160.21%)",
      }}
    >
      <div className="">
        <h1 className="text-white text-center mb-3">
          Got Questions? We’ve Got Answers.
        </h1>
        <h6 className="text-[#F9FAFB] text-[30px] text-center font-normal">
          Frequently Asked Questions
        </h6>
      </div>
      <div className="">
        <Accordion items={items} />
      </div>
    </div>
    </div>
  );
};

export default HomeAccordion;
