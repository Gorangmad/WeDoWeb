import CallIcon from "@mui/icons-material/Call";

import { Button } from "../../shadcn-components/ui/button";

const MainSection = () => {
  return (
    <div className="w-11/12 2xl:w-5/6 mx-auto flex flex-col justify-center items-center h-screen">
      <div className="w-full   2xl:mt-40 2xl:mb-80 flex justify-center items-center">
        <p className="text-start text-4xl  2xl:text-7xl text-pretty leading-normal  tracking-normal font-black 2xl:w-1/2 2xl:text-center">
          Empowering Your
          <br />
          <span className="text-cyan-500"> Digital Future </span>
          Websites, Apps, and More – We Bring Ideas to Life
        </p>
      </div>
      <div className="mt-8 w-full flex justify-start ">
        <Button className="rounded-full text-xl px-8 py-8 font-semibold bg-cyan-500">
          <a
            href="https://tally.so/r/w52XQo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Now{" "}
            <CallIcon
              fontSize="large"
              className="ms-10 bg-white text-black rounded-full p-1  "
            />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MainSection;
