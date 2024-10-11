import React from "react";

const ImpressumCard = (props) => {
  return (
    <div>
      <p className="text-lg font-bold text-violet-500 tracking-wide">
        {props.title}
      </p>
      <p className="text-lg tracking-wide ">{props.text1}</p>
      <p className="text-lg tracking-wide ">{props.text2}</p>
      {props.text3 ? (
        <p className="text-lg tracking-wide ">{props.text3}</p>
      ) : null}
      {props.text4 ? (
        <p className="text-lg tracking-wide ">{props.text4}</p>
      ) : null}
    </div>
  );
};

export default ImpressumCard;
