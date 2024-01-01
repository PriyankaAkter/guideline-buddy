import Image from "next/image";
import Button from "../../components/shared/Button";
import FeatureCard from "./FaetureCard";

const FeatureHero = () => {
  return (
    <div className="pt-[180px] grid gap-[200px]">
      <FeatureCard
        title="Looking for investor and lender guidelines?"
        subTitle="He's got your back. Just tell him what you need, and he'll give you
            a quick summary with all the info you're looking for. Easy peasy,
            right? Go ahead, ask away!"
        image="/assets/images/f1.png"
      />

      <div className="grid grid-cols-2 items-center gap-[141px]    container">
      <div className="relative w-[890px] h-[651px] -ml-[181px]">
          <Image
            src="/assets/images/f2.png"
            fill
            alt="feature"
            className="rounded-[60px]"
          />
        </div>
        <div>
          <h2 className="mb-7">The right answers right at your fingertips</h2>
          <p className="mb-20 text-[#6B7280] text-[18px]">
            Make sure you stay in the loop with real-time updates on investor
            guidelines. Plus, you'll get notifications whenever there are
            changes, so you're never caught off guard. It's like having all the
            information you need, right when you need it!
          </p>
          <Button
            href="/"
            title="Get Started"
            className="py-[14px] px-14 w-fit "
          />
        </div>
        
      </div>

      <FeatureCard
        title="Stay organized and keep tabs on important chats"
        subTitle="Whether you're working on a loan or any other task that needs revisiting, just mark it as your favorite. That way, you can come back to it whenever you're ready to wrap things up, making your workflow smooth and efficient."
        image="/assets/images/f3.png"
      />
    </div>
  );
};

export default FeatureHero;
