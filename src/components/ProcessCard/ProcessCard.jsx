import React from "react";
import ContactLottie from "../../assets/Lotties/contact.json";
import DoneIcon from "@mui/icons-material/Done";
import Lottie from "lottie-react";

const ProcessCard = () => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <div className="col-span-1 flex justify-center items-center  ">
        <Lottie
          animationData={ContactLottie}
          loop={true}
          className="min-[450px]:w-5/6 md:w-3/4 mx-auto lg:w-5/6 xl:w-4/5 min-[1700px]:w-4/6 "
        />
      </div>
      <div className="col-span-1  ">
        <p className="text-cyan-500 text-xl font-semibold mt-16">
          1. Kostenlose Beratung buchen
        </p>
        <p className="text-xl mt-10 leading-relaxed">
          Durch die Kontaktaufnahme sichern Sie sich unverbindlich das aktuelle
          Top-Angebot. In einem persönlichen 1. Gespräch besprechen wir Ihre
          Wünsche und Vorstellungen.
        </p>

        <div className="mt-10">
          <p className="text-lg flex items-center my-2">
            <DoneIcon className="text-cyan-500 me-1.5" /> Experten als
            Ansprechpartner
          </p>
          <p className="text-lg flex items-center my-2">
            <DoneIcon className="text-cyan-500 me-1.5" /> Experten als
            Ansprechpartner
          </p>
          <p className="text-lg flex items-center my-2">
            <DoneIcon className="text-cyan-500 me-1.5" /> Experten als
            Ansprechpartner
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
