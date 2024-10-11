import DatenschutzCard from "../DatenschutzCard/DatenschutzCard";

const DatenschutzSection = () => {
  return (
    <section className="w-11/12 min-[450px]:w-5/6 mx-auto flex flex-col">
      <p className="text-black  text-5xl font-semibold my-20">Datenschutz</p>
      <div className="flex flex-col gap-y-16 mb-16">
        <DatenschutzCard />
        <DatenschutzCard />
        <DatenschutzCard />
        <DatenschutzCard />
        <DatenschutzCard />
      </div>
    </section>
  );
};

export default DatenschutzSection;
