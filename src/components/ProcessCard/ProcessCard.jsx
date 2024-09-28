import clsx from "clsx";

const ProcessCard = (props) => {
  const bgColorClass = clsx({
    "bg-red-300": props.bgColor === "red",
    "bg-purple-300": props.bgColor === "purple",
    "bg-emerald-300": props.bgColor === "emerald",
    "bg-amber-300": props.bgColor === "amber",
  });
  return (
    <div className="w-full min-[500px]:w-52 sm:w-64 sm:h-64 ">
      <p
        className={` ${bgColorClass}  rounded-full text-white w-12 h-12 flex justify-center items-center text-2xl font-semibold mb-4  `}
      >
        {props.number}
      </p>
      <p className="text-2xl font-black mb-4">{props.title}</p>
      <p className="text-lg xl:text-xl font-medium">{props.description}</p>
    </div>
  );
};

export default ProcessCard;
