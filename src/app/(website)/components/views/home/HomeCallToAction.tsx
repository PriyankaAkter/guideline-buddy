import Button from "../../shared/Button";

const HomeCallToAction = () => {
  return (
    <div className="container py-[200px]">

    <div style={{background:"linear-gradient(291deg, #5437CC 55.93%, #D385DC 154.26%)"}} className=' rounded-[20px] 2xl:rounded-[185px] mx-auto   py-24 flex flex-col items-center '>
      <h1 className='text-center text-white mb-10'>
      Equipping Mortgage <br />Professionals for a New Era
      </h1>
      <p className="text-xl text-[#F3F4F6] w-[940px] text-center mb-20">We're shaking up the mortgage tech scene with next-gen tools that prioritize people and are powered by AI. We empower mortgage pros to simplify complex guidelines in a snap with cutting-edge tools, making their job extra efficient. Now, mortgage pros can level up their loan origination, processing, and underwriting game to make an even bigger impact.</p>
      <Button href="/about" title="Explore Our Vision" className="py-[14px] px-14 w-fit drop-shadow-lg" />
    </div>
    </div>
  );
};

export default HomeCallToAction;
