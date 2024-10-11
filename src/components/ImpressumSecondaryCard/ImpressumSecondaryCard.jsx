const ImpressumSecondaryCard = (props) => {
  return (
    <div>
      <p className="text-black  text-4xl font-[550] ">{props.title}</p>
      <p className=" mt-16 text-base sm:text-lg md:text-xl leading-relaxed font-thin">
        {props.text1}
      </p>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed font-thin">
        {props.text2}
      </p>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed font-thin">
        {props.text3}
      </p>
    </div>
  );
};

export default ImpressumSecondaryCard;
