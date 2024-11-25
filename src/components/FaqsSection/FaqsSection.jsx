import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn-components/ui/accordion";

import FaqLottie from "../../assets/Lotties/faq.json";
import Lottie from "lottie-react";
// import { Fade } from "react-awesome-reveal";

const FaqsSection = () => {
  return (
    <section className="w-11/12 min-[450px]:w-5/6 mx-auto mb-20 lg:mb-28 xl:mb-40 ">
      <h1 className="text-cyan-500 font-black text-3xl md:text-4xl lg:text-5xl  2xl:text-6xl">
        FAQs
      </h1>
      <hr className="mt-5 mb-2 border-2 border-cyan-500   " />
      <div className=" grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-20 ">
        <div className="lg:col-span-1 flex flex-col mt-5 justify-center items-center   ">
          <div className="  px-3  w-full ">
            <Lottie
              animationData={FaqLottie}
              loop={false}
              className=" min-[450px]:w-5/6 md:w-3/4 mx-auto lg:w-5/6 xl:w-4/5 min-[1700px]:w-4/6    "
            />
          </div>
          {/* <Fade> */}
          {/* </Fade> */}
          {/* <p className="tracking-wide text-lg  min-[500px]:text-xl  font-[525] text-gray-600   ">
          We understand that when you're considering our services, you may have
          specific questions and concerns that need addressing. To assist you,
          we've carefully curated a comprehensive collection of frequently asked
          questions.
        </p> */}
        </div>
        <div className="lg:col-span-1 ">
          <Accordion type="single" collapsible>
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-1"
              className="border-b border-black py-3"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl">
                Wie funktioniert das Bestellsystem genau?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                Unser modernes Bestellsystem ist direkt mit einer
                professionellen Website verknüpft und bietet eine intuitive,
                benutzerfreundliche Plattform für Ihre Kunden. Ob Produkte,
                Dienstleistungen oder individuelle Anforderungen – das System
                wird genau auf Ihre Geschäftsbedürfnisse zugeschnitten und
                ermöglicht eine reibungslose Abwicklung ohne Umwege.
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-2"
              className="border-b border-black py-3"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl">
                Welche Kosten fallen an? Gibt es versteckte Gebühren?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                Es gibt keine versteckten Gebühren! Sie zahlen einmalig für die
                Erstellung der Website und des Bestellsystems. Danach fällt eine
                monatliche Pauschale an, die Wartung, Domain, Support, E-Mail,
                Datenintegrität und Datenschutz abdeckt. Anders als bei
                Plattformen, die Provisionen verlangen, behalten Sie 100 % Ihres
                Umsatzes – egal, wie viele Bestellungen Sie generieren.
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-3"
              className="border-b border-black py-3"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl">
                Kann ich das System individuell an mein Unternehmen anpassen?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                Absolut! Unser System ist flexibel und anpassbar. Ob spezielle
                Funktionen, ein individuelles Design oder branchenspezifische
                Anforderungen – wir gestalten Ihre Website und das Bestellsystem
                genau nach Ihren Wünschen. Sie erhalten zunächst eine Vorlage,
                die wir mit Ihnen abstimmen, und danach beginnt die Umsetzung,
                um Ihre Vision in die Realität zu bringen.
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-4"
              className="border-b border-black py-3"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl">
                Wie hilft mir das System, Provisionen oder Gebühren zu sparen?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                Viele Plattformen verlangen hohe Prozentsätze oder Gebühren für
                jede Bestellung. Mit unserem System gehören diese Abgaben der
                Vergangenheit an. Sie zahlen keine Prozente und behalten den
                gesamten Umsatz, was Ihnen langfristig enorme Einsparungen und
                mehr Kontrolle über Ihre Einnahmen bringt.
              </AccordionContent>
            </AccordionItem>
            {/* </Fade> */}
            {/* <Fade direction="up"> */}
            <AccordionItem
              value="item-5"
              className="border-b border-black py-3"
            >
              <AccordionTrigger className="font-medium text-start text-xl md:text-2xl">
                Brauche ich technische Vorkenntnisse, um das System zu nutzen?
              </AccordionTrigger>
              <AccordionContent className="tracking-wider text-base md:text-lg 2xl:text-xl ">
                Nein, unser System ist so konzipiert, dass es für jeden einfach
                zu bedienen ist. Zudem begleiten wir Sie in den ersten Wochen,
                um sicherzustellen, dass Sie und Ihr Team das System optimal
                nutzen können. Unser Support steht Ihnen jederzeit zur
                Verfügung, um Fragen zu klären oder Herausforderungen zu lösen.
              </AccordionContent>
            </AccordionItem>

            {/* </Fade> */}
          </Accordion>
        </div>
      </div>{" "}
    </section>
  );
};

export default FaqsSection;
