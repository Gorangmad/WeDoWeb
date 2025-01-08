import gsap from "gsap";

import { useRef, useState } from "react";
import ArrowSvg from "../../assets/arrow.svg";

import "./ServicesMarquee.css";

import Marquee from "react-fast-marquee";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesMarquee = () => {
  const marqueeRef = useRef();

  const [rotateClass, setRotateClass] = useState("");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: "10% 50%",
        end: "bottom 50%",

        scrub: true,
      },
    });
    tl.to(".arrow", {
      rotation: 270,
    });
  });

  return (
    <Marquee
      className="bg-black text-white  py-10 w-screen text-5xl my-20"
      ref={marqueeRef}
    >
      <p className="">Website Development</p>
      <div className={`arrow  `}>
        <img src={ArrowSvg} alt="arrow" loading="lazy" />{" "}
      </div>
      <p className="">App Development</p>
      <div className={`arrow  `}>
        <img src={ArrowSvg} alt="arrow" loading="lazy" />{" "}
      </div>
      <p className="">IT Solutions</p>
      <div className={`arrow  `}>
        <img src={ArrowSvg} alt="arrow" loading="lazy" />{" "}
      </div>
      <p className="">Digital Presence</p>
      <div className={`arrow  `}>
        <img src={ArrowSvg} alt="arrow" loading="lazy" />{" "}
      </div>
    </Marquee>
  );
};

export default ServicesMarquee;
