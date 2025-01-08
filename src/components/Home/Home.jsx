import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // Assuming this is from your gsap-react package

import MainSection from "../MainSection/MainSection";
import { useRef } from "react";
import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FaqsSection from "../FaqsSection/FaqsSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import Footer from "../Footer/Footer";
import ContactSection from "../ContactSection/ContactSection";
import ProcessSection from "../ProcessSection/ProcessSection";
import PreLoader from "../PreLoader/PreLoader";

import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainContainerRef = useRef();
  const aboutContainerRef = useRef();
  const faqContainerRef = useRef();
  const servicesContainerRef = useRef();
  const processContainerRef = useRef();
  const contactContainerRef = useRef();

  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();
  const card5Ref = useRef();
  const card6Ref = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // -------------------------------------BELOW IS THE CODE WHICH WAS RUNNING ON THE LOOM VIDEO.....

    mm.add("(min-height:600px)", () => {
      // FIRST ANIMATION
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "5% 0%",
          end: "75% 0%",
          scrub: 2,
          // markers: true,
        },
      });
      tl.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "130%",
          left: "70%",
          rotate: "360",
          scale: 0.5,
          // duration: 5,
        },
        "first"
      );
      // SECOND ANIMATION
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainerRef.current,
          start: "50% 50%",
          end: "100% 10%",
          scrub: 2,
          // markers: true,
        },
      });
      tl2.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],

        {
          top: "235%",
          left: "20%",
          rotate: "270",
          scale: 1,
          duration: 2,
          stagger: 0.2,
        },
        "second"
      );
      // 3RD ANIMATION
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: "0% 0%",
          end: "150% 0%",
          scrub: 2,
          // markers: true,
        },
      });
      tl3.to(
        card1Ref.current,

        {
          top: "345%",
          left: "30%",
          rotate: "45",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card2Ref.current,

        {
          top: "345%",
          left: "59%",
          rotate: "12",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card3Ref.current,

        {
          top: "378%",
          left: "30%",
          rotate: "36",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card4Ref.current,

        {
          top: "378%",
          left: "59%",
          rotate: "57",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card5Ref.current,

        {
          top: "410%",
          left: "30%",
          rotate: "99",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card6Ref.current,

        {
          top: "410%",
          left: "59%",
          rotate: "270",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      //   // 4TH ANIMATION
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: processContainerRef.current,
          start: "20% 100%",
          end: "80% 50%",
          scrub: 2,
          // markers: true,
        },
      });
      tl4.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "480%",
          left: "20%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      tl4.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "530%",
          left: "70%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      tl4.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],

        {
          top: "580%",
          left: "20%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      // 5th ANIMATION
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: processContainerRef.current,
          start: "90% 50%",
          end: "140% 50%",
          scrub: 2,
          // markers: true,
        },
      });
      tl5.to(
        card1Ref.current,
        {
          top: "650%",
          left: "30%",
          rotate: "45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card2Ref.current,
        {
          top: "652%",
          left: "80%",
          rotate: "-45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card3Ref.current,
        {
          top: "670%",
          left: "48%",
          rotate: "315",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card4Ref.current,
        {
          top: "720%",
          left: "28%",
          rotate: "45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card5Ref.current,
        {
          top: "720%",
          left: "80%",
          rotate: "-45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card6Ref.current,
        {
          top: "700%",
          left: "50%",
          rotate: "163",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
    });

    // ------------------------------------------------------- IT ENDS HERE

    // ----------------------AFTER 800px HEIGHT----------------
    mm.add("(min-height:850px)", () => {
      // FIRST ANIMATION
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "5% 0%",
          end: "75% 0%",
          scrub: 2,
          // markers: true,
        },
      });
      tl.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "125%",
          left: "70%",
          rotate: "360",
          scale: 0.5,
          // duration: 5,
        },
        "first"
      );
      // SECOND ANIMATION
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainerRef.current,
          start: "50% 50%",
          end: "100% 10%",
          scrub: 2,
          // markers: true,
        },
      });
      tl2.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],

        {
          top: "223%",
          left: "20%",
          rotate: "270",
          scale: 1,
          duration: 2,
          stagger: 0.2,
        },
        "second"
      );
      // 3RD ANIMATION
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: "0% 0%",
          end: "150% 0%",
          scrub: 2,
          // markers: true,
        },
      });
      tl3.to(
        card1Ref.current,

        {
          top: "310%",
          left: "30%",
          rotate: "45",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card2Ref.current,

        {
          top: "310%",
          left: "59%",
          rotate: "12",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card3Ref.current,

        {
          top: "338%",
          left: "30%",
          rotate: "36",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card4Ref.current,

        {
          top: "338%",
          left: "59%",
          rotate: "57",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card5Ref.current,

        {
          top: "370%",
          left: "30%",
          rotate: "99",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card6Ref.current,

        {
          top: "370%",
          left: "59%",
          rotate: "270",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      //   // 4TH ANIMATION
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: processContainerRef.current,
          start: "20% 100%",
          end: "80% 50%",
          scrub: 2,
          // markers: true,
        },
      });
      tl4.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "420%",
          left: "20%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      tl4.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "470%",
          left: "70%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      tl4.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],

        {
          top: "520%",
          left: "20%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      // 5th ANIMATION
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: processContainerRef.current,
          start: "90% 50%",
          end: "140% 50%",
          scrub: 2,
          // markers: true,
        },
      });
      tl5.to(
        card1Ref.current,
        {
          top: "575%",
          left: "30%",
          rotate: "45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card2Ref.current,
        {
          top: "577%",
          left: "80%",
          rotate: "-45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card3Ref.current,
        {
          top: "615%",
          left: "48%",
          rotate: "315",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card4Ref.current,
        {
          top: "633%",
          left: "28%",
          rotate: "45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card5Ref.current,
        {
          top: "633%",
          left: "80%",
          rotate: "-45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card6Ref.current,
        {
          top: "592%",
          left: "50%",
          rotate: "163",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
    });
  });

  return (
    <div className=" ">
      <div
        className="  card w-40 h-40  rotate-45  absolute top-[15%] 2xl:top-[12%] left-[18%] 2xl:left-[22%]  hidden xl:flex   justify-center items-center"
        id="card-1"
        ref={card1Ref}
      ></div>
      <div
        className="   card w-40 h-40 rotate-90  absolute top-[42%] left-[12%] 2xl:left-[6%]  hidden xl:flex   justify-center items-center"
        id="card-2"
        ref={card2Ref}
      ></div>
      <div
        className="  card w-40 h-40   rotate-180  absolute top-[72%] left-[15%] 2xl:left-[22%] hidden xl:flex   justify-center items-center"
        id="card-3"
        ref={card3Ref}
      ></div>
      <div
        className="  card w-40 h-40  -rotate-45  absolute top-[15%] 2xl:top-[12%] right-[22%] 2xl:right-[22%] hidden xl:flex   justify-center items-center"
        id="card-4"
        ref={card4Ref}
      ></div>
      <div
        className="  card w-40 h-40  -rotate-90  absolute top-[42%] right-[12%] 2xl:right-[6%] hidden xl:flex   justify-center items-center"
        id="card-5"
        ref={card5Ref}
      ></div>
      <div
        className="  card w-40 h-40  rotate-12  absolute top-[72%] right-[22%]  2xl:right-[22%] hidden xl:flex   justify-center items-center"
        id="card-6"
        ref={card6Ref}
      ></div>

      <PreLoader />
      <div className=" min-h-screen  relative">
        <Header />
        <div ref={mainContainerRef}>
          <MainSection />
        </div>
        <div className="" ref={aboutContainerRef}>
          <AboutSection />
        </div>

        {/* <SectionSpace /> */}
        <div ref={faqContainerRef}>
          <FaqsSection />
        </div>
        {/* <SectionSpace /> */}
        <div ref={servicesContainerRef}>
          <ServicesSection />
        </div>
        {/* <SectionSpace /> */}
        {/* <ServicesMarquee /> */}
        <div ref={processContainerRef}>
          <ProcessSection />
        </div>
        {/* <SectionSpace /> */}

        <div className="" ref={contactContainerRef}>
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
