import { useRef, useState } from "react";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import ContactLottie from "../../assets/Lotties/contact.json";

import "./ContactSection.css";

const ContactSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    emailjs
      .sendForm("service_vntlmxv", "template_5ujyj5g", form.current, {
        publicKey: "htG5M9rBf2f4B9V3q",
      })
      .then(() => {
        console.log("SUCCESS!");
        alert("Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send message. Please try again.");
      });
  };

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
          <form
            className="flex flex-col gap-y-10 lg:gap-y-16"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              name="from_name" // Add name attribute
              placeholder="Full Name"
              className="border-2 rounded-lg border-cyan-500  p-2.5 text-lg outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              name="email" // Add name attribute
              placeholder="Email"
              className="border-2 rounded-lg border-cyan-500  p-2.5 text-lg outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message" // Add name attribute
              className="textarea textarea-bordered border-cyan-500 border-2 h-28 text-lg"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div>
              <button className="button" type="submit">
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
