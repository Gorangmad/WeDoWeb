import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";

import FaqLottie from "../../assets/Lotties/faq.json";
import Lottie from "lottie-react";
// import { Fade } from "react-awesome-reveal";

const FaqsSection = () => {
  return (
    <section className="w-11/12 min-[450px]:w-5/6 mx-auto mb-20 lg:mb-28 xl:mb-40 ">
      <h1 className="text-violet-500 font-black text-3xl md:text-4xl lg:text-5xl  2xl:text-6xl">
        FAQs
      </h1>
      <hr className="mt-5 mb-2 border-2 border-violet-500   " />
      <div className=" grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-20 ">
        <div className="lg:col-span-1 flex flex-col mt-5 justify-center items-center   ">
          <div className="  px-3  w-full ">
            <Lottie
              animationData={FaqLottie}
              loop={false}
              className=" min-[450px]:w-5/6 md:w-3/4 mx-auto lg:w-5/6 xl:w-4/5 min-[1700px]:w-4/6    "
            />
          </div>
          {/* <Fade> */}
          {/* </Fade> */}
          {/* <p className="tracking-wide text-lg  min-[500px]:text-xl  font-[525] text-gray-600   ">
          We understand that when you're considering our services, you may have
          specific questions and concerns that need addressing. To assist you,
          we've carefully curated a comprehensive collection of frequently asked
          questions.
        </p> */}
        </div>
        <div className="lg:col-span-1 ">
          <Accordion type="single" collapsible>
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-1"
              className="border-b border-black py-5"
            >
              <AccordionTrigger className="font-medium  no-underline text-start text-xl md:text-2xl xl:text-3xl">
                How exactly do you assist us?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                We help our clients by stepping into their business consulting
                on their current lead generation and management system and
                advising and building a better system backed by experience and
                data. Our goal is to save you time, increase conversion rate and
                pre qualify your leads as
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-2"
              className="border-b border-black py-5"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl xl:text-3xl">
                Which platforms do you utilize?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                We help our clients by stepping into their business consulting
                on their current lead generation and management system and
                advising and building a better system backed by experience and
                data. Our goal is to save you time, increase conversion rate and
                pre qualify your leads as
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-3"
              className="border-b border-black py-5"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl xl:text-3xl">
                How will you assess our needs?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                We help our clients by stepping into their business consulting
                on their current lead generation and management system and
                advising and building a better system backed by experience and
                data. Our goal is to save you time, increase conversion rate and
                pre qualify your leads as
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-4"
              className="border-b border-black py-5"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl xl:text-3xl">
                How soon can we expect to see results?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                We help our clients by stepping into their business consulting
                on their current lead generation and management system and
                advising and building a better system backed by experience and
                data. Our goal is to save you time, increase conversion rate and
                pre qualify your leads as
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-5"
              className="border-b border-black py-5"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl xl:text-3xl">
                With whom will I collaborate?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                We help our clients by stepping into their business consulting
                on their current lead generation and management system and
                advising and building a better system backed by experience and
                data. Our goal is to save you time, increase conversion rate and
                pre qualify your leads as
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
          </Accordion>
        </div>
      </div>{" "}
    </section>
  );
};

export default FaqsSection;
