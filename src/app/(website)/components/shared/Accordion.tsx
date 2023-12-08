import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';





const Accordion = ({ items }:any) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='grid gap-5 2xl:gap-12  mt-14'>
      {items.map((item:any, index:any) => (
        <div key={index} className="mb-4 ">
          <div
            className="flex justify-between items-center md:pt-6 md:pb-4 py-2 px-4 md:pl-10 md:pr-16 cursor-pointer rounded-[24px] bg-[#E7E3F8] md:gap-40  2xl:gap-[200px] "
            onClick={() => toggleAccordion(index)}
          >
            <h6 className="text-lg font-semibold text-[#5437CC]">{item.title}</h6>
            

            <FaPlus className="w-7 h-7 text-[#5437CC]" />
            
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-white">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;