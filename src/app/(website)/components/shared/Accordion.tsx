import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';





const Accordion = ({ items }:any) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='grid gap-5 2xl:gap-12  mt-24 w-[961px] mx-auto'>
      {items.map((item:any, index:any) => (
        <div key={index} className="">
          <div
            className="py-7 px-10 flex items-center justify-between cursor-pointer rounded-[20px] bg-[#EEE5FF]"
            onClick={() => toggleAccordion(index)}
          >
            <span className="w-[581px] text-[26px] font-normal font-poppins text-[#5437CC]">{item.title}</span>
            

            <FaPlus className="w-7 h-7 text-[#5437CC]" />
            
          </div>
          {activeIndex === index && (
            <div className="py-7 px-10 rounded-[20px] bg-[#EEE5FF] mt-3">
              
              <span className="text-[26px] font-normal font-poppins text-[#5437CC]">{item.content}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;