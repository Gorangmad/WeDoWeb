import { useRef } from "react";
import Service1 from "../../assets/service-1.jpg";
import Service2 from "../../assets/service-2.jpg";
import Service3 from "../../assets/service-3.jpg";
import Service4 from "../../assets/service-4.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

import "./ServicesSection.css";

gsap.registerPlugin(ScrollTrigger);

// const ServicesSection = () => {
//   const image1Ref = useRef();
//   const serviceCardRef = useRef();

//   useGSAP(() => {
//     const lenis = new Lenis();

//     lenis.on("scroll", (e) => {
//       console.log(e);
//     });

//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     const services = gsap.utils.toArray(".service");
//     console.log(services);

//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     };
//     const observerCallback = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const service = entry.target;
//           const imgContainer = service.querySelector(".img");

//           ScrollTrigger.create({
//             trigger: service,
//             start: "bottom bottom",
//             end: "top top",
//             // markers: true,
//             scrub: true,
//             onUpdate: (self) => {
//               let progress = self.progress;
//               let newWidth = 30 + 70 * progress;
//               gsap.to(imgContainer, {
//                 width: newWidth + "%",
//                 duration: 0.1,
//                 ease: "none",
//               });
//             },
//           });

//           ScrollTrigger.create({
//             trigger: service,
//             start: "top bottom",
//             end: "top top",
//             scrub: true,
//             onUpdate: (self) => {
//               let progress = self.progress;
//               let newHeight = 150 + 300 * progress;
//               gsap.to(service, {
//                 height: newHeight + "px",
//                 duration: 0.1,
//                 ease: "none",
//               });
//             },
//           });

//           observer.unobserve(service);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     services.forEach((service) => {
//       observer.observe(service);
//     });
//   });

//   //   useGSAP(() => {
//   //     const tl = gsap.timeline({
//   //       scrollTrigger: {
//   //         trigger: image1Ref.current,
//   //         start: "50% 50%",
//   //         end: "100% 50%",
//   //         markers: true,
//   //         scrub: 2,
//   //       },
//   //     });

//   //     tl.to(image1Ref.current, {
//   //       width: "80%",
//   //       height: "80%",
//   //     });
//   //   });

//   return (
//     <section className=" w-5/6 mx-auto services">
{
  /* <div className=" ">
  <h2 className="col-span-4 text-cyan-500 font-black   text-7xl my-10">
    Services
  </h2>
  <hr className="mt-5 mb-10 border-2 border-cyan-500   " />
</div> */
}
//       <div className="">
//         <div className="service ">
//           <div className="service-info ">
//             <h1 className="h1 ">Website Development</h1>
//             <p className="p">
//               {" "}
//               We provide bespoke web development solutions tailored to your
//               business needs. Our team ensures top-notch performance and
//               scalability.
//             </p>
//           </div>
//           <div className="service-img  ">
//             <div className=" img">
//               <img src={Service1} className="  " />
//             </div>
//           </div>
//         </div>
//         <div className="service ">
//           <div className="service-info ">
//             <h1 className="h1">Application Development</h1>
//             <p className="p">
//               {" "}
//               We provide bespoke web development solutions tailored to your
//               business needs. Our team ensures top-notch performance and
//               scalability.
//             </p>
//           </div>
//           <div className="service-img  ">
//             <div className=" img">
//               <img src={Service2} className="  " />
//             </div>
//           </div>
//         </div>{" "}
//         <div className="service ">
//           <div className="service-info ">
//             <h1 className="h1">IT Consultancy</h1>
//             <p className="p">
//               {" "}
//               We provide bespoke web development solutions tailored to your
//               business needs. Our team ensures top-notch performance and
//               scalability.
//             </p>
//           </div>
//           <div className="service-img  ">
//             <div className=" img">
//               <img src={Service3} className="  " />
//             </div>
//           </div>
//         </div>{" "}
//         <div className="service ">
//           <div className="service-info ">
//             <h1 className="h1">Digital Marketing</h1>
//             <p className="p">
//               {" "}
//               We provide bespoke web development solutions tailored to your
//               business needs. Our team ensures top-notch performance and
//               scalability.
//             </p>
//           </div>
//           <div className="service-img  ">
//             <div className=" img">
//               <img src={Service4} className="  " />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // export default ServicesSection;
// import EastIcon from "@mui/icons-material/East";
// const ServicesSection = () => {
//   // document.querySelectorAll(".elem").forEach(function (elem) {
//   // var rotate = 0;
//   // var diffrot = 0;

//   // elem.addEventListener("mouseleave", function (dets) {
//   //   gsap.to(elem.querySelector("img"), {
//   //     opacity: 0,
//   //     ease: Power3,
//   //     duration: 0.5,
//   //   });
//   // });

//   // elem.addEventListener("mousemove", function (dets) {
//   //   var diff = dets.clientY - elem.getBoundingClientRect().top;
//   //   diffrot = dets.clientX - rotate;
//   //   rotate = dets.clientX;
//   //   gsap.to(elem.querySelector("img"), {
//   //     opacity: 1,
//   //     ease: Power3,
//   //     top: diff,
//   //     left: dets.clientX,
//   //     rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//   //   });
//   // });
//   // });

//   useGSAP(() => {
//     const elemArray = gsap.utils.toArray(".elem");

//     elemArray.forEach((elem) => {
//       var rotate = 0;
//       var diffrot = 0;

//       elem.addEventListener("mouseleave", function (dets) {
//         console.log("JAA RAHA");
//         gsap.to(elem.querySelector("img"), {
//           opacity: 0,
//           ease: "power3.out",
//           duration: 0.5,
//         });
//       });

//       elem.addEventListener("mousemove", function (dets) {
//         console.log("AA GYA");
//         var diff = dets.clientY - elem.getBoundingClientRect().top;
//         diffrot = dets.clientX - rotate;
//         rotate = dets.clientX;
//         gsap.to(elem.querySelector("img"), {
//           opacity: 1,
//           ease: "power3.out",
//           top: diff,
//           left: dets.clientX - "200",
//           rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//         });
//       });
//     });
//   });

//   return (
//     <section className=" text-black  w-5/6 mx-auto py-44 max-[500px]:ps-6 ps-8 md:ps-12 lg:ps-16">
// <div className=" ">
//   <h2 className="col-span-4 text-cyan-500 font-black   text-7xl my-10">
//     Services
//   </h2>
//   <hr className="mt-5 mb-10 border-2 border-cyan-500   " />
// </div>
//       <div className="elem border-b-2  py-7 md:py-10 lg:py-16 xl:py-20 border-cyan-500 flex items-center justify-between">
//         <img src={Service1} alt="" className="rounded-lg " />
//         <p className="max-[500px]:text-[2.75rem] text-5xl sm:text-6xl lg:text-8xl 2xl:text-7xl font-black uppercase tracking-wide opacity-75">
//           Web Development
//         </p>
//         {/* <p className="text-xl ">
//           <EastIcon
//             fontSize="large"
//             className="border rounded-full p-1 border-black"
//           />
//         </p> */}
//       </div>
//       <div className="elem border-b-2  py-7 md:py-10 lg:py-16 xl:py-20 border-cyan-500 flex items-center justify-between">
//         <img src={Service2} alt="" className=" rounded-lg" />
//         <p className="max-[500px]:text-[2.75rem] text-5xl sm:text-6xl lg:text-8xl 2xl:text-7xl font-black uppercase tracking-wide opacity-75">
//           App Development
//         </p>
//         {/* <p className="text-sm sm:text-base">2022</p> */}
//       </div>
//       <div className=" elem border-b-2  py-7 md:py-10 lg:py-16 xl:py-20 border-cyan-500 flex items-center justify-between">
//         <img src={Service3} alt="" className=" rounded-lg" />
//         <p className="max-[500px]:text-[2.75rem] text-5xl sm:text-6xl lg:text-8xl 2xl:text-7xl font-black uppercase tracking-wide opacity-75">
//           IT Consultancy
//         </p>
//         {/* <p className="text-sm sm:text-base">2021</p> */}
//       </div>
//       <div className=" elem border-b-2  py-7 md:py-10 lg:py-16 xl:py-20 border-cyan-500 flex items-center justify-between">
//         <img src={Service4} alt="" className="rounded-lg " />
//         <p className="max-[500px]:text-[2.75rem] text-5xl sm:text-6xl lg:text-8xl 2xl:text-7xl font-black uppercase tracking-wide opacity-75">
//           Digital Marketing
//         </p>
//         {/* <p className="text-sm sm:text-base">2021</p> */}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import ServicesCard from "../ServicesCard/ServicesCard";
const ServicesSection = () => {
  return (
    <section
      name="Services"
      className=" w-11/12 min-[450px]:w-5/6 mx-auto  mb-20 lg:mb-28 xl:mb-40"
    >
      <div className=" ">
        <h2 className="text-cyan-500 font-black text-3xl md:text-4xl lg:text-5xl  2xl:text-6xl 2xl:leading-tight">
          Ihr Bestellsystem,
          <br />
          maßgeschneidert und effizient
        </h2>
        <hr className="mt-5 mb-12 border-2 border-cyan-500   " />
        <p className=" text-start lg:w-2/3 mb-12 text-gray-600">
          Unser Bestellsystem bietet Großhändlern die Möglichkeit, Bestellungen
          einfacher, schneller und kostengünstiger abzuwickeln - ohne
          Kompromisse bei der Qualität. Unsere Lösung ist vollständig anpassbar
          und passt sich nahtlos an die speziellen Anforderungen Ihres
          Unternehmens an. Egal, ob Sie große Volumen verwalten oder spezifische
          Funktionen benötigen, wir bieten Ihnen die Flexibilität und Kontrolle,
          die Sie brauchen.
        </p>
      </div>
      <div className="flex flex-wrap   justify-center md:justify-between  gap-10 lg:gap-20 xl:gap-10 ">
        <ServicesCard
          title="Keine Provisionen"
          desc="Im
Gegensatz zu Drittanbieter-
Plattformen zahlen Sie bei uns nur
eine feste Gebühr und haben volle
Kostenkontrolle"
        />
        <ServicesCard
          title="Individuelle Anpassungen"
          desc="Wir bauen Ihr System genau so,
wie Sie es brauchen - kein
unnötiger Schnickschnack, nur die
Funktionen, die für Sie wichtig
sind"
        />
        <ServicesCard
          title="Schnelle Implementierung"
          desc="
Unsere Systeme lassen sich
schnell und effizient integrieren,
sodass Sie direkt von den Vorteilen
profitieren"
        />
        <ServicesCard
          title="Langfristige Betreuung"
          desc="Wir
bieten kontinuierliche
Unterstützung und sorgen dafür,
dass Ihr System immer auf dem
neuesten Stand bleibt"
        />
        <ServicesCard
          title="Langfristige Betreuung"
          desc="Wir
bieten kontinuierliche
Unterstützung und sorgen dafür,
dass Ihr System immer auf dem
neuesten Stand bleibt"
        />{" "}
        <ServicesCard
          title="Langfristige Betreuung"
          desc="Wir
bieten kontinuierliche
Unterstützung und sorgen dafür,
dass Ihr System immer auf dem
neuesten Stand bleibt"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
