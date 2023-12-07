"use client";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <div className='container'>
      <div>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-14 lg:items-center py-12 md:py-20 2xl:py-36 '>
          <h3>Give us a shout</h3>
          <p>
            little blurb about reaching <br />
            out on one to two lines of text
          </p>
        </div>

        <form className='max-w-[1394px] mx-auto rounded-[20px] lg:rounded-[60px] mb-16 md:mb-32 2xl:mb-[281px] bg-[#0F1114] px-8 xl:px-32 pb-16 pt-24 grid gap-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[72px] '>
            <div className='w-full '>
              <input
                className='border-b w-full border-b-[#F8F6F8]   pb-3 bg-inherit text-white placeholder:text-white lg:placeholder:text-2xl '
                {...register("name", { required: true })}
                placeholder='Full Name*'
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className='w-full '>
              <input
                className='border-b w-full border-b-[#F8F6F8] pb-3 bg-inherit text-white placeholder:text-white lg:placeholder:text-2xl '
                {...register("email", { required: true })}
                placeholder='Email Address*'
              />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>
          <div className='w-full '>
            <input
              className='border-b w-full border-b-[#F8F6F8] pb-3 bg-inherit text-white placeholder:text-white lg:placeholder:text-2xl '
              {...register("subject", { required: true })}
              placeholder='Message Subject*'
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <textarea
            name='message'
            cols={30}
            rows={10}
            placeholder='Message*'
            className='placeholder:text-white   lg:placeholder:text-2xl bg-inherit border-b w-full border-b-[#F8F6F8]'
          ></textarea>
          <div className='text-right'>
            <input
              type='submit'
              style={{
                background:
                  "linear-gradient(90deg, #D385DC -7.88%, #5437CC 111.68%)",
              }}
              className='py-3 lg:py-4 px-5 lg:px-[73px] rounded-[60px] text-white text-base lg:text-2xl w-fit '
            />
          </div>
        </form>

        <div className='pb-20 xl:pb-36'>
          <h4 className='mb-4 text-4xl lg:text-5xl'>Guideline Buddy</h4>
          <p className='font-bold'>Address Line 1</p>
          <p>Address information on two lines of text</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
