import React, { useEffect } from "react";
import ImpressumSection from "../ImpressumSection/ImpressumSection";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SecondaryNavbar />
      <ImpressumSection />
    </div>
  );
};

export default Impressum;
