import HomePage from "./containers/HomePage/HomePage";
import "./App.css";
import { useEffect } from "react";

import Lenis from "lenis";
import { Route, Routes } from "react-router-dom";
import ImpressumPage from "./containers/ImpressumPage/ImpressumPage";
import DatenschutzPage from "./containers/DatenschutzPage/DatenschutzPage";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // console.log(window.innerHeight);
  });
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
      </Routes>
    </div>
  );
}

export default App;
