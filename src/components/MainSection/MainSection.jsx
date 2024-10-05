import CallIcon from "@mui/icons-material/Call";

import { Button } from "../../shadcn-components/ui/button";

const MainSection = () => {
  return (
    <div
      name="Home"
      className="w-11/12 min-[450px]:w-5/6 2xl:w-5/6 mx-auto flex flex-col justify-center items-center h-screen"
    >
      <div className="w-full md:mt-10 lg:mt-0     flex justify-start lg:justify-center items-center">
        {/* <p className="text-start lg:text-center text-4xl min-[600px]:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] min-[1140px]:text-[3.5rem] min-[1365px]:text-[4rem] min-[1570px]:text-[4.5rem]   text-pretty   leading-normal  tracking-normal font-black min-[550px]:w-5/6 min-[700px]:w-3/4 md:w-5/6 min-[900px]:w-3/4 lg:w-2/3 xl:w-3/5   min-[1760px]:w-1/2  "> */}
        {/* Empowering Your
          <br />
          <span className="text-cyan-500"> Digital Future </span>
          Websites, Apps, and More – We Bring Ideas to Life */}
        {/* <p className="text-start lg:text-center text-[3.25rem] leading-[2.7rem] min-[600px]:text-[2.5rem] md:text-[3rem] lg:text-9xl  text-pretty     tracking-normal font-black min-[550px]:w-5/6 min-[700px]:w-3/4 md:w-5/6 min-[900px]:w-3/4 lg:w-2/3 xl:w-3/5   min-[1760px]:w-1/2">
          Turn <p className="my-8 text-cyan-500">Complexity</p> Of Orders
        </p> */}
        <p className="text-start lg:text-center text-5xl min-[400px]:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl 2xl:leading-normal lg:leading-normal md:leading-normal sm:leading-normal leading-normal  font-black min-[550px]:w-5/6 min-[700px]:w-3/4 md:w-5/6 min-[900px]:w-3/4 lg:w-2/3 xl:w-3/5   min-[1760px]:w-1/2">
          Turn <p className=" text-cyan-500">Complexity</p> Of Orders
        </p>
        {/* </p> */}
      </div>
      <div className="mt-10 w-full flex justify-start lg:hidden ">
        <Button className="rounded-full text-xl px-6 py-8 font-semibold bg-cyan-500">
          <a
            href="https://tally.so/r/w52XQo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Now{" "}
            <CallIcon
              fontSize="large"
              className="ms-5 bg-white text-black rounded-full p-1  "
            />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MainSection;
