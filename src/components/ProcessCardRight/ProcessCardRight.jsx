import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import Lottie from "lottie-react";

const ProcessCardRight = (props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 sm:gap-10 lg:gap-20 ">
      <div className="col-span-1 flex justify-center items-center  ">
        <Lottie
          animationData={props.lottie}
          loop={true}
          className="min-[450px]:w-5/6 md:w-3/4 mx-auto lg:w-5/6 xl:w-4/5 min-[1700px]:w-4/6 "
        />
      </div>
      <div className="col-span-1 bg-white ">
        <p className="text-cyan-500 text-xl font-semibold lg:mt-10 xl:mt-16">
          {props.title}
        </p>
        <p className="text-lg sm:text-xl mt-10 leading-relaxed">{props.desc}</p>

        <div className="mt-10">
          <p className="text-lg flex items-center my-2">
            <DoneIcon className="text-cyan-500 me-1.5" />
            {props.text1}
          </p>
          <p className="text-lg flex items-center my-2">
            <DoneIcon className="text-cyan-500 me-1.5" />
            {props.text2}
          </p>
          <p className="text-lg flex items-center my-2">
            <DoneIcon className="text-cyan-500 me-1.5" />
            {props.text3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCardRight;
