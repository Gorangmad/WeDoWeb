import { useGSAP } from "@gsap/react";
import Logo from "../../assets/logo.png";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("img", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      delay: 4.5,
    });
    tl.from(".nav-links", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
  });
  return (
    <nav className="flex items-center justify-between w-5/6 mx-auto fixed top-0">
      <div>
        <img src={Logo} className="w-40" />
      </div>
      <div className="">
        <ul className="relative flex items-center gap-x-14 text-lg text-cyan-500 font-semibold cursor-pointer">
          <div className="overlay absolute   w-full h-full z-10 bg-transparent"></div>
          <li
            className="nav-links z-10"
            id="link-1"
            onMouseEnter={() => {
              gsap.to("#link-1", {
                color: "white",
              });

              gsap.to("#cursor", {
                scale: 2,
              });
            }}
            onMouseLeave={() => {
              gsap.to("#link-1", {
                color: "#06b6d4",
              });

              gsap.to("#cursor", {
                scale: 1,
              });
            }}
          >
            <a className="tracking-wide">Home</a>
          </li>
          <li
            className="nav-links z-10"
            id="link-2"
            onMouseEnter={() => {
              gsap.to("#link-2", {
                color: "white",
              });

              gsap.to("#cursor", {
                scale: 2,
              });
            }}
            onMouseLeave={() => {
              gsap.to("#link-2", {
                color: "#06b6d4",
              });

              gsap.to("#cursor", {
                scale: 1,
              });
            }}
          >
            <a className="tracking-wide">About Us</a>
          </li>{" "}
          <li
            className="nav-links z-10"
            id="link-3"
            onMouseEnter={() => {
              gsap.to("#link-3", {
                color: "white",
              });

              gsap.to("#cursor", {
                scale: 2,
              });
            }}
            onMouseLeave={() => {
              gsap.to("#link-3", {
                color: "#06b6d4",
              });

              gsap.to("#cursor", {
                scale: 1,
              });
            }}
          >
            <a className="tracking-wide">Services</a>
          </li>{" "}
          <li
            className="nav-links z-10"
            id="link-4"
            onMouseEnter={() => {
              gsap.to("#link-4", {
                color: "white",
              });

              gsap.to("#cursor", {
                scale: 2,
              });
            }}
            onMouseLeave={() => {
              gsap.to("#link-4", {
                color: "#06b6d4",
              });

              gsap.to("#cursor", {
                scale: 1,
              });
            }}
          >
            <a className="tracking-wide">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
