import { Type } from "@/app/types/types";
import { industries } from "../../components/shared/data";
import Image from "next/image";
import Link from "next/link";

const Industry = () => {
  return (
    <div className="py-56 sb bg-[#5437CC] rounded-[60px] text-white">
      <h3 className="text-center">
        Empowering Professionals <br />
        Across the Mortgage Industry
      </h3>
      <div className="container px-20">
        <div className="grid gap-[447px] py-56">
          {industries?.map((industry: Type) => (
            <div className="flex sb  justify-between items-center gap-10   ">
              <div
                className={
                  industry?.id % 2 == 0
                    ? `w-[610px] sb order-last`
                    : `w-[610px] sb order-first`
                }
              >
                <h3>{industry?.title}</h3>
                <p className="mb-10">{industry?.description}</p>
              </div>
              <div className="relative w-full md:w-[534px] h-[534px] ">
                <Image
                  src={industry?.image}
                  fill
                  alt="image"
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="mb-12">Get Started Today</h1>
          <Link
            href="/"
            className="rounded-[33px]  text-xl  text-white px-12 py-3 w-fit"
            style={{
              background:
                "linear-gradient(90deg, #EAB9F0 -14.08%, #DA61E6 120.17%)",
            }}
          >
            Browse Plans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Industry;
