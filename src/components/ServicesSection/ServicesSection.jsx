import { useRef } from "react";
import Service1 from "../../assets/service-1.jpg";
import Service2 from "../../assets/service-2.jpg";
import Service3 from "../../assets/service-3.jpg";
import Service4 from "../../assets/service-4.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import "./ServicesSection.css";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const image1Ref = useRef();
  const serviceCardRef = useRef();

  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const services = gsap.utils.toArray(".service");
    console.log(services);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target;
          const imgContainer = service.querySelector(".img");

          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: newWidth + "%",
                duration: 0.1,
                ease: "none",
              });
            },
          });

          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let newHeight = 150 + 300 * progress;
              gsap.to(service, {
                height: newHeight + "px",
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    services.forEach((service) => {
      observer.observe(service);
    });
  });

  //   useGSAP(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: image1Ref.current,
  //         start: "50% 50%",
  //         end: "100% 50%",
  //         markers: true,
  //         scrub: 2,
  //       },
  //     });

  //     tl.to(image1Ref.current, {
  //       width: "80%",
  //       height: "80%",
  //     });
  //   });

  return (
    <section className=" w-5/6 mx-auto services">
      <div className=" ">
        <h2 className="col-span-4 text-cyan-500 font-black   text-7xl my-10">
          Services
        </h2>
        <hr className="mt-5 mb-10 border-2 border-cyan-500   " />
      </div>
      <div className="">
        <div className="service ">
          <div className="service-info ">
            <h1 className="h1 ">Website Development</h1>
            <p className="p">
              {" "}
              We provide bespoke web development solutions tailored to your
              business needs. Our team ensures top-notch performance and
              scalability.
            </p>
          </div>
          <div className="service-img  ">
            <div className=" img">
              <img src={Service1} className="  " />
            </div>
          </div>
        </div>
        <div className="service ">
          <div className="service-info ">
            <h1 className="h1">Application Development</h1>
            <p className="p">
              {" "}
              We provide bespoke web development solutions tailored to your
              business needs. Our team ensures top-notch performance and
              scalability.
            </p>
          </div>
          <div className="service-img  ">
            <div className=" img">
              <img src={Service2} className="  " />
            </div>
          </div>
        </div>{" "}
        <div className="service ">
          <div className="service-info ">
            <h1 className="h1">IT Consultancy</h1>
            <p className="p">
              {" "}
              We provide bespoke web development solutions tailored to your
              business needs. Our team ensures top-notch performance and
              scalability.
            </p>
          </div>
          <div className="service-img  ">
            <div className=" img">
              <img src={Service3} className="  " />
            </div>
          </div>
        </div>{" "}
        <div className="service ">
          <div className="service-info ">
            <h1 className="h1">Digital Marketing</h1>
            <p className="p">
              {" "}
              We provide bespoke web development solutions tailored to your
              business needs. Our team ensures top-notch performance and
              scalability.
            </p>
          </div>
          <div className="service-img  ">
            <div className=" img">
              <img src={Service4} className="  " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
