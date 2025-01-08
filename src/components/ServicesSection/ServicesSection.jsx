import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ServicesSection.css";

gsap.registerPlugin(ScrollTrigger);

import React from "react";

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
  desc="Vergessen Sie hohe Gebühren von Drittanbieter-Plattformen. Mit uns zahlen Sie nur eine transparente, feste Gebühr und behalten Ihre Einnahmen zu 100%."
/>
<ServicesCard
  title="Eigene Online-Präsenz"
  desc="Wir erstellen Ihre eigene Website mit integriertem Bestellsystem, damit Sie die Kontrolle über Ihre Marke und Kundendaten behalten."
/>
<ServicesCard
  title="Individuelle Lösungen"
  desc="Jedes Restaurant ist einzigartig – wir passen das System exakt an Ihre Bedürfnisse an, ohne überflüssige Funktionen."
/>
<ServicesCard
  title="Schnelle Einrichtung"
  desc="Unser Team sorgt für eine schnelle und reibungslose Implementierung, damit Ihr System in wenigen Tagen einsatzbereit ist."
/>
<ServicesCard
  title="Kontinuierlicher Support"
  desc="Wir begleiten Sie langfristig mit regelmäßigen Updates, technischer Unterstützung und Optimierungen."
/>
<ServicesCard
  title="Marketing-Integration"
  desc="Nutzen Sie Kundendaten für gezielte Marketingaktionen wie Newsletter, Rabattaktionen oder Treueprogramme – alles direkt über Ihr System."
/>
     </div>
    </section>
  );
};

export default ServicesSection;
