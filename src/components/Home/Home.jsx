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
import ServicesSection from "../ServicesSection/ServicesSection";
import Footer from "../Footer/Footer";
import ContactSection from "../ContactSection/ContactSection";
import SectionSpace from "../SectionSpace/SectionSpace";

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
        start: "0% 0%",
        end: "33% 50%",
        scrub: 1,

        // markers: true,
      },
    });

    tl.to(
      card1Ref.current,
      {
        top: "130%",
        left: "65%",
        rotate: "180",
        scale: 0.5,
      },
      "card"
    );
    tl.to(
      card2Ref.current,
      {
        top: "130%",
        left: "65%",
        rotate: "180",
        scale: 0.5,
      },
      "card"
    );
    tl.to(
      card3Ref.current,
      {
        top: "130%",
        left: "65%",
        rotate: "180",
        scale: 0.5,
      },
      "card"
    );
    tl.to(
      card4Ref.current,
      {
        top: "130%",
        left: "65%",
        rotate: "180",
        scale: 0.5,
      },
      "card"
    );
    tl.set(
      [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current],
      {
        display: "none",
      }
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
      className=" "
    >
      {/* <div
        className="absolute w-5 h-5 bg-black rounded-full z-[5]"
        id="cursor"
        ref={cursorRef}
      ></div> */}
      <div
        className="w-52 h-32   rotate-45 rounded-xl absolute left-96 top-44  hidden lg:flex justify-center items-center"
        id="card-1"
        ref={card1Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>
      <div
        className="w-52 h-32 rotate-[35deg] rounded-xl absolute right-96 top-44 hidden lg:flex justify-center items-center"
        id="card-1"
        ref={card2Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>{" "}
      <div
        className="w-52 h-32  rotate-[120deg] rounded-xl absolute left-96 bottom-44  hidden lg:flex justify-center items-center"
        id="card-1"
        ref={card3Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>{" "}
      <div
        className="w-52 h-32  rotate-[190deg] rounded-xl absolute right-96 bottom-44  hidden lg:flex justify-center items-center"
        id="card-1"
        ref={card4Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>
      <PreLoader />
      <div className=" min-h-screen  ">
        <Header />
        <MainSection />
        {/* <AboutSection /> */}
        {/* <SectionSpace /> */}
        {/* <FaqsSection /> */}
        {/* <SectionSpace /> */}
        {/* <ServicesSection /> */}
        {/* <SectionSpace /> */}
        {/* <ServicesMarquee /> */}
        {/* <ContactSection /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
