import { useRef } from "react";
import SplitTextJS from "split-text-js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // Assuming this is from your gsap-react package

import "./PreLoader.css";

const PreLoader = () => {
  const loaderRef = useRef(null);

  useGSAP(() => {
    const titles = gsap.utils.toArray(".service-text");
    const tl = gsap.timeline();
    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitTitle.chars,
        { opacity: 0, y: -80, rotateX: 90, stagger: 0.02 },
        "<1"
      );
    });

    gsap.to(".company-name", {
      opacity: 0,
      delay: 3.5,
    });

    gsap.to(".overlay", {
      delay: 4.5,
      display: "none",
    });

    // useGSAP hook for GSAP animations

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
  });

  return (
    <div className="overlay z-50" ref={loaderRef}>
      <div className="container ">
        <p className="text-violet-500 font-black company-name">WEDO</p>
        <div className="text-wrapper">
          <p className="service-text">Website Development</p>
          <p className="service-text">App Development</p>
          <p className="service-text">Business Digitalisation</p>
        </div>
      </div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default PreLoader;
