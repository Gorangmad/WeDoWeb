import { useRef } from "react";

import Lottie from "lottie-react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutLottie from "../../assets/Lotties/about.json";
import AboutImage from "../../assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutTextRef = useRef();
  const textContainerRef = useRef();
  const aboutLottieRef = useRef();
  const aboutContainerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: "30% 60%",
        end: "80% 50%",
        // markers: true,
        scrub: 2,
      },
    });
    tl.to(aboutTextRef.current, {
      height: "100%",
    });
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        start: "75% 50%",
        end: "150% 50%",
        // markers: true,
        scrub: 2,
      },
    });
    tl.to(aboutLottieRef.current, {
      top: "182%",
      left: "9%",
    });
  });

  return (
    <div
      ref={aboutContainerRef}
      className="grid grid-cols-2 pb-20  w-5/6 mx-auto"
    >
      <div
        ref={textContainerRef}
        className="col-span-1 flex flex-col justify-start "
      >
        <h1 className="text-cyan-500 font-black   text-7xl">ABOUT US</h1>{" "}
        <hr className="mt-5 mb-10 border-2 border-cyan-500   " />
        <div className="relative">
          <p className="tracking-wide leading-relaxed text-2xl text-gray-400 about-text">
            At WEDO, we excel in providing cutting-edge digital solutions
            tailored to meet the unique needs of your business. Our diverse team
            of professionals combines deep industry knowledge with the latest
            technological advancements to deliver innovative and effective
            strategies. From building dynamic websites and mobile applications
            to implementing comprehensive digital marketing campaigns, we are
            dedicated to driving your success in a competitive digital
            landscape. We pride ourselves on a client-centric approach, ensuring
            that every project is customized to align with your specific goals
            and challenges. Let WEDO be the catalyst for your digital
            transformation.
          </p>
          <p
            ref={aboutTextRef}
            className="tracking-wide leading-relaxed text-2xl absolute  top-0 h-10 overflow-hidden about-text-hover"
          >
            At WEDO, we excel in providing cutting-edge digital solutions
            tailored to meet the unique needs of your business. Our diverse team
            of professionals combines deep industry knowledge with the latest
            technological advancements to deliver innovative and effective
            strategies. From building dynamic websites and mobile applications
            to implementing comprehensive digital marketing campaigns, we are
            dedicated to driving your success in a competitive digital
            landscape. We pride ourselves on a client-centric approach, ensuring
            that every project is customized to align with your specific goals
            and challenges. Let WEDO be the catalyst for your digital
            transformation.
          </p>
        </div>
      </div>

      <div className="col-span-1 flex justify-center">
        <div ref={aboutLottieRef} className="absolute">
          <Lottie
            animationData={AboutLottie}
            loop={true}
            className=" h-[600px] w-[600px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
