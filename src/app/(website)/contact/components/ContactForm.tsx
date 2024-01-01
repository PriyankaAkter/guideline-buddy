"use client";
import { useForm } from "react-hook-form";
import Button from "../../components/shared/Button";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div className="container pt-[175px] pb-[200px]">
      <div>
        <div className="text-center">
          <h1>Give us a shout</h1>
          <p className="text-xl text-[#6B7280]">
          Have a question about how Guideline Buddy can <br />help you? Leave us a message below!
          </p>
        </div>
        <div className="mt-24 rounded-[20px] lg:rounded-[60px] bg-[#EEE5FF]  py-[106px] pl-[121px] pr-[76px] flex gap-[231px]">
          <div>
            <p className="font-bold mb-5">Guideline Buddy LLC</p>
            <div className="grid gap-3">
            <p>74 E Glenwood Ave </p>
            <p>Unit 5202 Smyrna, DE 19977</p>
            <p>Hey@guidelinebuddy.com</p>
            </div>
            
          </div>
          <form className="grid gap-14 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 ">
              <div className="w-full ">
                <input
                  className="border w-full border-[#374151]   bg-white text-[#6B7280] placeholder:text-[#6B7280] placeholder:text-[18px] py-7 px-5 rounded-[30px]"
                  style={{ outline: "none" }}
                  {...register("firstName", { required: true })}
                  placeholder="First Name*"
                />
                {errors.firstName && <span>This field is required</span>}
              </div>
              <div className="w-full ">
                <input
                  className="border w-full border-[#374151]   bg-white text-[#6B7280] placeholder:text-[#6B7280] placeholder:text-[18px] py-7 px-5 rounded-[30px]"
                  style={{ outline: "none" }}
                  {...register("lastName", { required: true })}
                  placeholder="Last Name*"
                />
                {errors.lastName && <span>This field is required</span>}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 ">
              <div className="w-full ">
                <input
                  className="border w-full border-[#374151]   bg-white text-[#6B7280] placeholder:text-[#6B7280] placeholder:text-[18px] py-7 px-5 rounded-[30px]"
                  style={{ outline: "none" }}
                  {...register("email ", { required: true })}
                  placeholder="Email *"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="w-full ">
                <input
                  className="border w-full border-[#374151]   bg-white text-[#6B7280] placeholder:text-[#6B7280] placeholder:text-[18px] py-7 px-5 rounded-[30px]"
                  style={{ outline: "none" }}
                  {...register("phone", { required: true })}
                  placeholder="phone*"
                />
                {errors.phone && <span>This field is required</span>}
              </div>
            </div>

            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Message *"
              style={{ outline: "none" }}
              className="border w-full border-[#374151]   bg-white text-[#6B7280] placeholder:text-[#6B7280] placeholder:text-[18px] py-7 px-5 rounded-[30px]"
            ></textarea>
            <div className="text-right">
            <Button href="/" title="Send" className="py-[14px] px-14" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
