import Link from "next/link";
import Button from "../../shared/Button";

const HomeVision = () => {
  return (
    <div className=" pt-[92px] pb-[108px] xl:my-[192px] container">
      <div className="xl:w-[900px] mx-auto text-center flex flex-col items-center gap-10 ">
        <h3>Empowering Mortgage Professionals for a New Era</h3>
        <p className=" text-center">
            We're on a mission to transform the mortgage landscape, making it
          accessible, efficient, and fair for all. Discover how we blend
          cutting-edge technology with a human touch to redefine the mortgage
          lending experience.
        </p>
        <Link
          href="/"
          className="rounded-[33px]  text-xl  text-white px-5 md:px-8 py-2 w-fit"
          style={{background: 'linear-gradient(90deg, #D385DC -14.08%, #5437CC 120.17%)'

          }}
        >
          Explore Our Vision
        </Link>
      </div>
    </div>
  );
};

export default HomeVision;
