import ImpressumCard from "../ImpressumCard/ImpressumCard";

const ImpressumSection = () => {
  return (
    <section className="w-11/12 min-[450px]:w-5/6 2xl:w-5/6 mx-auto flex flex-col">
      <p className="text-black  text-5xl font-semibold mt-20">Impressum</p>
      <div className="flex flex-col items-start gap-y-12 mt-16">
        <ImpressumCard
          title="WEDO"
          text1="Wenske, Sebastian & Cetin, Baris GbR"
          text2="Ohlauer Straße 2"
          text3="10999 Berlin"
        />
        <ImpressumCard
          title="Kontakt"
          text1="Tel: 030 - 469 990 798"
          text2="E-Mail: info@space-rocket.de"
          text3="www.space-rocket.de"
        />
        <ImpressumCard
          title="Standort Tiergarten"
          text1="Space Rocket"
          text2="Waldstraße 25"
          text3="10551 Berlin"
        />
        <ImpressumCard
          title="Vertretungsberechtigte Gesellschafter"
          text1="Sebastian Wenske"
          text2="Baris Cetin"
        />
        <ImpressumCard
          title="Bankverbindung"
          text1="Commerzbank"
          text2="IBAN: DE96 1004 0000 0672 4405 00"
          text3="BIC: COBADEFFXXX"
          text4="USt-ID: DE322172389"
        />
      </div>
    </section>
  );
};

export default ImpressumSection;
