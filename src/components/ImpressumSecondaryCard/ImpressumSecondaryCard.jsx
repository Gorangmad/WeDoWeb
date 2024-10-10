const ImpressumSecondaryCard = (props) => {
  return (
    <div>
      <p className="text-black  text-4xl font-[550] ">{props.title}</p>
      <p className=" mt-16 text-xl leading-relaxed font-thin">{props.text1}</p>
      <p className="text-xl leading-relaxed font-thin">{props.text2}</p>
      <p className="text-xl leading-relaxed font-thin">{props.text3}</p>
    </div>
  );
};

export default ImpressumSecondaryCard;
