import { useRef } from "react";

import Lottie from "lottie-react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CallIcon from "@mui/icons-material/Call";

import AboutLottie from "../../assets/Lotties/about.json";
import AboutImage from "../../assets/about.jpg";
import { Button } from "../../shadcn-components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutTextRef = useRef();
  const textContainerRef = useRef();
  const aboutLottieRef = useRef();
  const aboutContainerRef = useRef();

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: textContainerRef.current,
  //       start: "30% 60%",
  //       end: "80% 50%",
  //       // markers: true,
  //       scrub: 2,
  //     },
  //   });
  //   tl.to(aboutTextRef.current, {
  //     height: "100%",
  //   });
  // });

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: aboutContainerRef.current,
  //       start: "75% 50%",
  //       end: "150% 50%",
  //       // markers: true,
  //       scrub: 2,
  //     },
  //   });
  //   tl.to(aboutLottieRef.current, {
  //     top: "182%",
  //     left: "9%",
  //   });
  // });

  return (
    <section
      name="About"
      className=" w-11/12 min-[450px]:w-5/6 mx-auto mb-10 min-[450px]:mb-0 lg:mb-28 xl:mb-40"
    >
      <div>
        <h1 className="text-cyan-500 font-black text-3xl md:text-4xl lg:text-5xl  2xl:text-6xl">
          ABOUT US
        </h1>
        <hr className="mt-5 mb-5 2xl:mb-10 border-2 border-cyan-500   " />
      </div>
      <div
        ref={aboutContainerRef}
        className="grid grid-cols-1 lg:grid-cols-2  lg:gap-10 2xl:gap-10  "
      >
        <div
          ref={textContainerRef}
          className="col-span-1 flex flex-col justify-start "
        >
          <div className="relative">
            <p className="tracking-wide text-start text-sm min-[450px]:text-base xl:tracking-wider leading-normal  md:leading-relaxed xl:leading-8 2xl:leading-8 sm:text-lg md:text-xl lg:text-lg min-[1200px]:text-xl text-black about-text">
              Bei WEDO zeichnen wir uns durch die Bereitstellung modernster
              digitaler Lösungen aus, die auf die individuellen Anforderungen
              Ihres Unternehmens zugeschnitten sind. Unser vielfältiges Team aus
              Fachleuten kombiniert fundierte Branchenkenntnisse mit den
              neuesten technologischen Fortschritten, um innovative und
              effektive Strategien zu entwickeln. Von der Erstellung dynamischer
              Websites und mobiler Anwendungen bis hin zur Implementierung
              umfassender digitaler Marketingkampagnen setzen wir uns dafür ein,
              Ihren Erfolg in einer wettbewerbsintensiven digitalen Landschaft
              voranzutreiben. Wir sind stolz auf einen kundenorientierten Ansatz
              und stellen sicher, dass jedes Projekt auf Ihre spezifischen Ziele
              und Herausforderungen zugeschnitten ist. Lassen Sie WEDO der
              Katalysator für Ihre digitale Transformation sein.
            </p>
            {/* <p
              ref={aboutTextRef}
              className="tracking-wide xl:tracking-wider  leading-normal md:leading-relaxed xl:leading-8 2xl:leading-9 sm:text-lg  md:text-xl lg:text-lg min-[1200px]:text-xl 2xl:text-2xl absolute  top-0 h-10 overflow-hidden about-text-hover"
            >
              At WEDO, we excel in providing cutting-edge digital solutions
              tailored to meet the unique needs of your business. Our diverse
              team of professionals combines deep industry knowledge with the
              latest technological advancements to deliver innovative and
              effective strategies. From building dynamic websites and mobile
              applications to implementing comprehensive digital marketing
              campaigns, we are dedicated to driving your success in a
              competitive digital landscape. We pride ourselves on a
              client-centric approach, ensuring that every project is customized
              to align with your specific goals and challenges. Let WEDO be the
              catalyst for your digital transformation.
            </p> */}
          </div>
          <div className="mt-12 w-full flex justify-start  ">
            <Button className="rounded-full text-xl px-6 py-8 font-semibold bg-cyan-500">
              <a
                href="https://calendly.com/hazemdawood8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Now{" "}
                <CallIcon
                  fontSize="large"
                  className="ms-5 bg-white text-black rounded-full p-1  "
                />
              </a>
            </Button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center xl:justify-between items-center my-10 min-[450px]:my-20 sm:my-28  min-[900px]:my-36 lg:my-0 ">
          <div ref={aboutLottieRef} className=" px-3  ">
            <Lottie
              animationData={AboutLottie}
              loop={true}
              className=" min-[450px]:w-5/6 md:w-3/4 lg:w-full mx-auto "
            />
          </div>
          <p className="mt-10 text-center text-4xl min-[500px]:text-[2.5rem] md:text-[3rem] lg:text-[2rem] xl:text-[3rem]    leading-relaxed  tracking-normal font-black  ">
            in <span className=" text-cyan-500">Klarheit</span> von Systemen
            umwandeln
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
