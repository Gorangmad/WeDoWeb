import HomePage from "./containers/HomePage/HomePage";
import "./App.css";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    console.log(window.innerHeight);
  });
  return (
    <div className="">
      <HomePage />
    </div>
  );
}

export default App;
