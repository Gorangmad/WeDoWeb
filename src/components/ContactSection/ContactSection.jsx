import Lottie from "lottie-react";
import ContactLottie from "../../assets/Lotties/contact.json";

import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="w-5/6 mx-auto mb-44">
      <div className=" ">
        <h2 className="col-span-4 text-cyan-500 font-black   text-7xl my-10">
          Contact Us
        </h2>
        <hr className="mt-5 mb-10 border-2 border-cyan-500   " />
      </div>
      <div className="grid grid-cols-2 gap-20 pt-5">
        <div className="col-span-1">
          <p className=" text-3xl font-black mb-20  text-black ">
            Get in touch with us
          </p>
          <form className="flex flex-col  gap-y-16">
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
        <div className="col-span-1 flex justify-center items-start">
          <Lottie
            animationData={ContactLottie}
            loop={true}
            className=" h-[520px] w-[550px] "
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
