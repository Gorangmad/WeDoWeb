const ImpressumSecondaryCard = (props) => {
  return (
    <div>
      <p className="text-black  text-3xl lg:text-4xl font-[550] ">
        {props.title}
      </p>
      <p className=" mt-16 text-base sm:text-lg lg:text-xl leading-relaxed ">
        {props.text1}
      </p>
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed ">
        {props.text2}
      </p>
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed ">
        {props.text3}
      </p>
    </div>
  );
};

export default ImpressumSecondaryCard;
