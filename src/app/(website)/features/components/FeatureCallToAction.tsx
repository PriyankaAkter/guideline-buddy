import Button from "../../components/shared/Button";

const FeatureCallToAction = () => {
  return (
    <div className="container py-[200px]">

    <div style={{background:"linear-gradient(291deg, #5437CC 55.93%, #D385DC 154.26%)"}} className=' rounded-[20px] 2xl:rounded-[100px] mx-auto   py-24 flex flex-col items-center '>
      <h1 className='text-center text-white mb-20'>
      See Guideline Buddy in <br />Action - Schedule a Demo
      </h1>
      <Button href="/pricing" title="Book A Time!" className="py-[14px] px-14 w-fit drop-shadow-lg" />
    </div>
    </div>
  );
};

export default FeatureCallToAction;
