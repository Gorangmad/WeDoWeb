import { Button } from "@/shadcn-components/ui/button";
import ProcessCard from "../ProcessCard/ProcessCard";
import { Fade } from "react-awesome-reveal";

const ProcessSection = () => {
  return (
    <section name="About" className=" w-11/12 min-[450px]:w-5/6 mx-auto">
      <div>
        <Fade>
          <h1 className="text-cyan-500 font-black text-3xl md:text-4xl lg:text-5xl  2xl:text-6xl">
            How It Works!
          </h1>
          <hr className="mt-5 mb-5 2xl:mb-10 border-2 border-cyan-500   " />
        </Fade>
      </div>
      {/* <p className="font-black text-cyan-500 text-4xl mb-8 lg:mb-12 min-[500px]:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            How it works!
          </p> */}
      <p className="tracking-wide   text-lg md:text-xl   font-[525] text-gray-600 lg:w-2/3 2xl:w-1/2  mb-8 lg:mb-12">
        Forget the long onboarding processes of traditional agencies. Just
        schedule a demo call, and we'll guide you through our straightforward
        process.
      </p>
      <div className="mb-8 lg:mb-12">
        <Button className="rounded-full text-xl py-6   bg-cyan-500 hover:bg-cyan-600">
          Start working with us today
        </Button>
      </div>
      <div className="flex justify-around lg:justify-between 2xl:justify-around flex-wrap gap-10 items-center  ">
        <ProcessCard
          bgColor="amber"
          number="1"
          title="Demo Call"
          description="Schedule a demo call to see if our services are a good fit for your business. We'll walk you through our pricing model and learn more about your current setup."
        />
        <ProcessCard
          bgColor="red"
          number="2"
          title="Onboarding"
          description="Once we confirm we can assist you and you agree to proceed, you'll be onboarded into our Slack channel to meet the team. This is where we'll provide ongoing updates."
        />
        <ProcessCard
          bgColor="emerald"
          number="3"
          title="Build timeline"
          description="Following our discovery call, we'll create a build timeline tailored to your current setup and our systems, ensuring seamless integration into your business."
        />
        <ProcessCard
          bgColor="purple"
          number="4"
          title="Build & integration"
          description="After approval, our team will begin working, providing updates at every step and collaborating with you in our Slack channel."
        />
      </div>
    </section>
  );
};

export default ProcessSection;
