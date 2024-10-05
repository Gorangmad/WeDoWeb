import React from "react";
import { Fade } from "react-awesome-reveal";

import ProcessCardRight from "../ProcessCardRight/ProcessCardRight";
import ProcessCardLeft from "../ProcessCardLeft/ProcessCardLeft";

import CallLottie from "../../assets/Lotties/website2.json";
import WebsiteLottie from "../../assets/Lotties/website.json";
import OnlineWebsiteLottie from "../../assets/Lotties/website-online.json";
import { useMediaQuery } from "react-responsive";

const ProcessSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <section className=" w-11/12 min-[450px]:w-5/6 mx-auto mb-20 lg:mb-28 xl:mb-40">
      <div>
        <Fade>
          <h1 className="text-cyan-500 font-black text-3xl md:text-4xl lg:text-5xl  2xl:text-6xl">
            How It Works!
          </h1>
          <hr className="mt-5 mb-5 2xl:mb-10 border-2 border-cyan-500   " />
        </Fade>
      </div>
      <div className="flex flex-col gap-y-10 lg:gap-y-0">
        <ProcessCardRight
          title="1. Kostenlose Beratung buchen"
          desc="Durch die Kontaktaufnahme sichern Sie sich unverbindlich das aktuelle Top-Angebot. In einem persönlichen 1. Gespräch besprechen wir Ihre Wünsche und Vorstellungen."
          text1="Experten als Ansprechpartner"
          text2="Unkompliziert und verständlich"
          text3="Individuelle Lösungen"
          lottie={CallLottie}
        />
        {isMobile ? (
          <ProcessCardRight
            title="2. Website erstellen lassen"
            desc="Auf Basis der besprochenen Anforderungen und Wünsche erstellt Ihnen Ihr persönlicher Webdesigner Ihre neue Website. Ausgezeichnete Designs individuell auf Sie und Ihr Business abgestimmt."
            text1="Datei-Upload für Ihre Dateien"
            text2="Website nach Ihren Wünschen"
            text3="Jederzeit individuelle Betreuung"
            lottie={WebsiteLottie}
          />
        ) : (
          <ProcessCardLeft
            title="2. Website erstellen lassen"
            desc="Auf Basis der besprochenen Anforderungen und Wünsche erstellt Ihnen Ihr persönlicher Webdesigner Ihre neue Website. Ausgezeichnete Designs individuell auf Sie und Ihr Business abgestimmt."
            text1="Datei-Upload für Ihre Dateien"
            text2="Website nach Ihren Wünschen"
            text3="Jederzeit individuelle Betreuung"
            lottie={WebsiteLottie}
          />
        )}

        <ProcessCardRight
          title="3. Onlinestellung Ihrer Website"
          desc="Optimale Prozesse, um Ihnen die Erstellung so bequem wie nur möglich zu gestalten. Von unserem innovativen Feedback-Tool bis hin zur Onlinestellung Ihrer Website. Lehnen Sie sich zurück und lassen Sie sich Ihre Website vom Profi erstellen."
          text1="Feedbacktool inkl. Websitevorschau"
          text2="Domain, Hosting & E-Mails inklusive"
          text3="CMS zur Pflege Ihrer Website"
          lottie={OnlineWebsiteLottie}
        />
      </div>
    </section>
  );
};

export default ProcessSection;
