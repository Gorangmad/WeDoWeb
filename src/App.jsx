import Lenis from "lenis";

import HomePage from "./containers/HomePage/HomePage";
import "./App.css";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  return (
    <div className="">
      <HomePage />
    </div>
  );
}

export default App;
