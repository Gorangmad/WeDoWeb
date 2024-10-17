import Lottie from "lottie-react";
import ContactLottie from "../../assets/Lotties/contact.json";

import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section
      name="Contact"
      className=" w-11/12 min-[450px]:w-5/6 mx-auto lg:mb-44"
    >
      <div className=" ">
        <h2 className="text-cyan-500 font-black text-3xl md:text-4xl lg:text-5xl  2xl:text-6xl">
          Contact Us
        </h2>
        <hr className="mt-5 mb-10 border-2 border-cyan-500   " />
      </div>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 pt-5">
        <div className="col-span-1">
          <p className=" text-3xl font-black mb-10 lg:mb-20  text-black ">
            Get in touch with us
          </p>
          <form className="flex flex-col  gap-y-10 lg:gap-y-16">
            <input
              placeholder="Full Name"
              className="border-2 rounded-lg border-cyan-500  p-2.5 text-lg  outline-none"
            />
            <input
              placeholder="Email"
              className="border-2 rounded-lg border-cyan-500  p-2.5 text-lg  outline-none"
            />
            <textarea
              className="textarea textarea-bordered border-cyan-500 border-2 h-28 text-lg"
              placeholder="Your Message"
            ></textarea>
            <div>
              <button className="button " type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1 flex justify-center items-center  ">
          <Lottie
            animationData={ContactLottie}
            loop={true}
            className="min-[450px]:w-5/6 md:w-3/4 mx-auto lg:w-5/6 xl:w-4/5 min-[1700px]:w-4/6 "
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
