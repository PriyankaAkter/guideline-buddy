import { Type } from "@/app/types/types";
import FounderCard from "../../components/shared/FounderCard";
import { founders } from "../../components/shared/data";

const Founders = () => {
  return (
    <div className='container '>
      <h4 className=''>MEET THE FOUNDERS</h4>
      <div className='grid grid-cols-1 sb xl:grid-cols-3  gap-16 mt-8 xl:mt-20 mb-20 xl:mb-44'>
        {founders?.map((founder: Type) => (
          <FounderCard founder={founder} key={founder?.id} />
        ))}
      </div>
    </div>
  );
};

export default Founders;
