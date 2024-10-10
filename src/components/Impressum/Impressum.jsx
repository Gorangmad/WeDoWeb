import React from "react";
import ImpressumSection from "../ImpressumSection/ImpressumSection";
import Header from "../Header/Header";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <SecondaryNavbar />
      <ImpressumSection />
    </div>
  );
};

export default Impressum;
