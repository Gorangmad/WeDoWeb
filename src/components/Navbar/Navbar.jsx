import { useGSAP } from "@gsap/react";
import Logo from "../../assets/logo.png";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("img", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      // delay: 4.5,
    });
    tl.from(".nav-links", {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
  });
  return (
    <nav className="flex items-center justify-between w-5/6 mx-auto right-0 left-0 absolute top-0 bg-white lg:bg-transparent ">
      <div>
        <img src={Logo} className="w-40" alt="wedo-logo" />
      </div>
      <div className="">
        <ul className="relative flex items-center gap-x-14 text-lg text-cyan-500 font-semibold cursor-pointer">
          <li className="nav-links " id="link-1">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              className="   "
            >
              Home
            </Link>
          </li>
          <li className="nav-links " id="link-2">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="   "
            >
              Über uns
            </Link>
          </li>{" "}
          <li className="nav-links " id="link-3">
            <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="   "
            >
              Dienste
            </Link>
          </li>{" "}
          <li className="nav-links " id="link-4">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="   "
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
