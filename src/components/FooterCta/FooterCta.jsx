import CallIcon from "@mui/icons-material/Call";

import { Button } from "@/shadcn-components/ui/button";

const FooterCta = () => {
  return (
    <div className="w-full bg-image bg-violet-300 flex flex-col justify-center items-center text-black p-8 my-8 py-16 lg:py-12 xl:py-20">
      <p className="font-black text-3xl min-[400px]:text-4xl sm:text-6xl lg:text-7xl text-center mb-7 lg:mb-10">
        Still got some questions?
      </p>
      <p className="text-center  text-xl sm:text-2xl  font-medium mb-7 lg:mb-10 ">
        Book a free demo call today with Unorthodox
      </p>
      <div>
        <div className=" ">
          <Button className="rounded-full text-xl lg:text-2xl px-6 py-8 font-semibold">
            <a
              href="https://calendly.com/hazemdawood8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free demo{" "}
              <CallIcon
                fontSize="large"
                className="ms-10 bg-white text-black rounded-full p-1"
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterCta;
