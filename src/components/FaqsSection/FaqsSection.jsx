import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";
// import { Fade } from "react-awesome-reveal";

const FaqsSection = () => {
  return (
    <div className="w-5/6 mx-auto  lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-20 ">
      <div className="lg:col-span-1 flex flex-col mt-5 ">
        {/* <Fade> */}
        <h1 className="text-cyan-500 font-black   text-7xl">FAQs</h1>{" "}
        <hr className="mt-5 mb-10 border-2 border-cyan-500   " />
        {/* </Fade> */}
        {/* <p className="tracking-wide text-lg  min-[500px]:text-xl  font-[525] text-gray-600   ">
          We understand that when you're considering our services, you may have
          specific questions and concerns that need addressing. To assist you,
          we've carefully curated a comprehensive collection of frequently asked
          questions.
        </p> */}
      </div>
      <div className="lg:col-span-1 mt-5 lg:mt-0">
        <Accordion type="single" collapsible>
          {/* <Fade direction="up"> */}
          <AccordionItem value="item-1" className="border-b border-black py-5">
            <AccordionTrigger className="font-medium  no-underline text-start text-xl md:text-2xl xl:text-4xl">
              How exactly do you assist us?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
              We help our clients by stepping into their business consulting on
              their current lead generation and management system and advising
              and building a better system backed by experience and data. Our
              goal is to save you time, increase conversion rate and pre qualify
              your leads as
            </AccordionContent>
          </AccordionItem>
          {/* </Fade> */}
          {/* <Fade direction="up"> */}
          <AccordionItem value="item-2" className="border-b border-black py-5">
            <AccordionTrigger className="font-medium text-start text-xl md:text-2xl xl:text-4xl">
              Which platforms do you utilize?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
              We help our clients by stepping into their business consulting on
              their current lead generation and management system and advising
              and building a better system backed by experience and data. Our
              goal is to save you time, increase conversion rate and pre qualify
              your leads as
            </AccordionContent>
          </AccordionItem>
          {/* </Fade> */}
          {/* <Fade direction="up"> */}
          <AccordionItem value="item-3" className="border-b border-black py-5">
            <AccordionTrigger className="font-medium text-start text-xl md:text-2xl xl:text-4xl">
              How will you determine what to develop for our needs?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
              We help our clients by stepping into their business consulting on
              their current lead generation and management system and advising
              and building a better system backed by experience and data. Our
              goal is to save you time, increase conversion rate and pre qualify
              your leads as
            </AccordionContent>
          </AccordionItem>
          {/* </Fade> */}
          {/* <Fade direction="up"> */}
          <AccordionItem value="item-4" className="border-b border-black py-5">
            <AccordionTrigger className="font-medium text-start text-xl md:text-2xl xl:text-4xl">
              How soon can we expect to see results?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
              We help our clients by stepping into their business consulting on
              their current lead generation and management system and advising
              and building a better system backed by experience and data. Our
              goal is to save you time, increase conversion rate and pre qualify
              your leads as
            </AccordionContent>
          </AccordionItem>
          {/* </Fade> */}
          {/* <Fade direction="up"> */}
          <AccordionItem value="item-5" className="border-b border-black py-5">
            <AccordionTrigger className="font-medium text-start text-xl md:text-2xl xl:text-4xl">
              With whom will I collaborate?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
              We help our clients by stepping into their business consulting on
              their current lead generation and management system and advising
              and building a better system backed by experience and data. Our
              goal is to save you time, increase conversion rate and pre qualify
              your leads as
            </AccordionContent>
          </AccordionItem>
          {/* </Fade> */}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsSection;
