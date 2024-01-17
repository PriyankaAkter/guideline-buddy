import Image from "next/image";
import Button from "../../components/shared/Button";
import FeatureCard from "./FaetureCard";

const FeatureHero = () => {
  return (
    <div className="pt-[180px] grid gap-[200px]">
      <FeatureCard
        title="Need a specific guideline?"
        subTitle="Guideline Buddy is super knowledgeable about Fannie Mae, Freddie Mac, FHA, VA, and USDA guidelines. And guess what? He's also really knowledgeable on the guidelines of select correspondent investors and wholesale lenders. No matter if you work at a bank, a retail lender, or a broker, Buddy's got your back! Just pick the set of guidelines you want to search, ask your question, and he'll give you a quick summary with all the info you need and what page to find it on. It's seriously that easy! So go ahead, feel free to ask away!"
        image="/assets/images/f1.png"
      />

      <div className="grid grid-cols-2 items-center gap-[141px]    container">
      <div className="relative w-[911px] h-[651px] -ml-[181px]">
          <Image
            src="/assets/images/f2.png"
            fill
            alt="feature"
            className="rounded-[60px]"
          />
        </div>
        <div >
          <h2 className="mb-7">The right answers right at your fingertips</h2>
          <p className="mb-20 text-[#6B7280] text-[18px]">
          Stay updated with the latest guidelines right at your fingertips! Guideline Buddy is always up-to-date with the most recent investor and lender guidelines. Plus, get timely notifications whenever changes happen, so you're always prepared. It's like having the info you need, exactly when you need it!
          </p>
          <Button
            href="/"
            title="Start Searching"
            className="py-[14px] px-14 w-fit "
          />
        </div>
        
      </div>

      <FeatureCard
        title="Stay organized and keep tabs on important chats"
        subTitle="All your chats are automatically saved, whether you're starting a new loan or revisiting an existing one. This cool feature allows you to pick up where you left off whenever you're ready to wrap things up, making your workflow smooth."
        image="/assets/images/f3.png"
      />
    </div>
  );
};

export default FeatureHero;
