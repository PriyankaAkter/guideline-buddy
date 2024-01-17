"use client";
import Accordion from "../../shared/Accordion";
const items = [
  {
    title:
      "So, what's the deal with Guideline Buddy? How can it actually help me out?",
    content:
      "Guideline Buddy, also known as Buddy, is an AI-powered chatbot that's trained to understand investor and lender guidelines. Just ask specific questions, and he'll respond in plain language, saving you time from sifting through PDFs. You can find the exact guideline you need hassle-free! ",
  },
  {
    title: "Who can benefit the most from using Guideline Buddy, you may ask?",
    content:
      "Buddy is a game-changer for anyone in the mortgage business who qualifies borrowers. Loan Officers, LOAs, Processors, Underwriters, and more can easily access and search guidelines. So, whether you're a newbie or seasoned veteran, Buddy saves you valuable time!",
  },
  {
    title:
      "Can't chatbots like ChatGPT, Bard, or Claude 2 help me in the same way?",
    content:
      "Well, here's the thing, Large Language Models (LLMs) are trained on general knowledge, not the nitty-gritty investor and lender guidelines that mortgage pros need to search. And since agency guidelines span thousands of pages, LLMs can only process a limited amount of text at once. That's where Guideline Buddy comes in! He’s specifically built to handle the massive amount of pages that investor and lender guidelines can be.",
  },
  {
    title:
      "So, I’m wondering how Guideline Buddy sets itself apart from other mortgage guideline chatbots?",
    content:
      "Here's the scoop, our main goal is to assist mortgage pros in searching guidelines. We don't mix our product with other services or make it exclusive to employees of certain companies. Now, don't get us wrong - we're not saying those things are bad. We just believe that focusing on one core function that's accessible to everyone is the smartest way to provide the best product for your hard-earned money.",
  },
  {
    title: "So, how do you ensure that the guidelines are always up-to-date? ",
    content:
      "Well, Buddy stays on top of the latest guidelines and learns them as soon as they're released. Plus, he keeps you in the loop by sharing the news about the latest guidelines right away. No need to worry about using outdated guidelines and making a mistake when qualifying a borrower.",
  },
  {
    title: "Hey, are there any resources out there to help me get started?",
    content:
      "Chatting with Buddy is super intuitive and user-friendly. If you ever need help learning your way around the platform, just ask Buddy directly! He'll give you clear instructions on how to make the most of your experience and effortlessly get the hang of it.",
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
