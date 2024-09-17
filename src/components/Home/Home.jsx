import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // Assuming this is from your gsap-react package

import MainSection from "../MainSection/MainSection";
import { useEffect, useRef, useState } from "react";
import PreLoader from "../PreLoader/PreLoader";
import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesMarquee from "../ServicesMarquee/ServicesMarquee";
import FaqsSection from "../FaqsSection/FaqsSection";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mainContainerRef = useRef();
  const cursorRef = useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: "5% 5%",
        end: "60% 50%",
        scrub: 2,

        // markers: true,
      },
    });

    tl.to(
      card1Ref.current,
      {
        top: "125%",
        left: "65%",
        rotate: "180",
        scale: 0.5,
      },
      "card"
    );
    tl.to(
      card2Ref.current,
      {
        top: "125%",
        left: "65%",
        rotate: "180",
        scale: 0.5,
      },
      "card"
    );
    tl.to(
      card3Ref.current,
      {
        top: "125%",
        left: "65%",
        rotate: "180",
        scale: 0.5,
      },
      "card"
    );
    tl.to(
      card4Ref.current,
      {
        top: "125%",
        left: "65%",
        rotate: "180",
        scale: 0.5,
      },
      "card"
    );
    tl.to(
      card1Ref.current,
      {
        opacity: 0,
      },
      "card2"
    );
    tl.to(
      card2Ref.current,
      {
        opacity: 0,
      },
      "card2"
    );
    tl.to(
      card3Ref.current,
      {
        opacity: 0,
      },
      "card2"
    );

    tl.to(
      card4Ref.current,
      {
        opacity: 0,
      },
      "card2"
    );

    // tl.to(
    //   card4Ref.current,
    //   {
    //     top: "166%",
    //     left: "80%",
    //     rotate: "180",
    //     scale: 0.5,
    //   },
    //   "card"
    // );
  });

  // useEffect(() => {
  //   console.log(mousePosition);
  // gsap.to("#cursor", {
  //   x: mousePosition.x,
  //   y: mousePosition.y,
  //   duration: 0.7,
  // });
  // }, [mousePosition]);

  // useGSAP(
  //   () => {
  //     gsap.to(cursorRef.current, {
  //       x: mousePosition.x,
  //       y: mousePosition.y,
  //       duration: 0.7,
  //     });
  //   },
  //   { scope: mainContainerRef.current, dependencies: [mousePosition] }
  // );

  return (
    <div
      onMouseMove={(ev) => setMousePosition({ x: ev.pageX, y: ev.pageY })}
      ref={mainContainerRef}
      className="pb-20"
    >
      {/* <div
        className="absolute w-5 h-5 bg-black rounded-full z-[5]"
        id="cursor"
        ref={cursorRef}
      ></div> */}
      <div
        className="w-52 h-32 bg-cyan-400 rotate-45 rounded-xl absolute left-96 top-44 flex justify-center items-center"
        id="card-1"
        ref={card1Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          fill="rgba(255,255,255,1)"
        >
          <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
        </svg>
      </div>
      <div
        className="w-52 h-32 bg-cyan-400 rotate-[35deg] rounded-xl absolute right-96 top-44  flex justify-center items-center"
        id="card-1"
        ref={card2Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          fill="rgba(255,255,255,1)"
        >
          <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
        </svg>
      </div>{" "}
      <div
        className="w-52 h-32 bg-cyan-400 rotate-[120deg] rounded-xl absolute left-96 bottom-44  flex justify-center items-center"
        id="card-1"
        ref={card3Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          fill="rgba(255,255,255,1)"
        >
          <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
        </svg>
      </div>{" "}
      <div
        className="w-52 h-32 bg-cyan-400 rotate-[190deg] rounded-xl absolute right-96 bottom-44  flex justify-center items-center"
        id="card-1"
        ref={card4Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          fill="rgba(255,255,255,1)"
        >
          <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
        </svg>
      </div>
      <PreLoader />
      <div className=" mx-auto min-h-screen  ">
        <Header />
        <MainSection />
        <AboutSection />
        <FaqsSection />
        {/* <ServicesMarquee /> */}
      </div>
    </div>
  );
};

export default Home;
