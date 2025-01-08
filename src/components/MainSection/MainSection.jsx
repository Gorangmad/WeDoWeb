import CallIcon from "@mui/icons-material/Call";

import { Button } from "../../shadcn-components/ui/button";

const MainSection = () => {
  return (
    <div
      name="Home"
      className="w-11/12 min-[450px]:w-5/6 2xl:w-5/6 mx-auto flex flex-col justify-center items-center h-screen"
    >
      <div className="w-full md:mt-10 lg:mt-0     flex justify-start lg:justify-center items-center">
        <p className="text-start lg:text-center text-5xl min-[400px]:text-6xl min-[400px]:leading-normal md:text-7xl lg:text-8xl 2xl:text-9xl 2xl:leading-normal lg:leading-normal md:leading-normal sm:leading-normal leading-normal  font-black min-[550px]:w-5/6 min-[700px]:w-3/4 md:w-5/6   ">
          <p className=" text-cyan-500 ">Komplexität</p>Von Aufträgen
        </p>
        {/* </p> */}
      </div>
      <div className="mt-10 w-full flex justify-start lg:hidden ">
        <Button className="rounded-full text-xl px-6 py-8 font-semibold bg-cyan-500">
          <a
            href="https://calendly.com/hazemdawood8"
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
