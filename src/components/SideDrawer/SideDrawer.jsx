import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shadcn-components/ui/sheet";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const SideDrawer = () => {
  return (
    <Sheet>
      <div className="flex justify-between items-center bg-transparent pl-2 pt-4 pr-4 fixed left-0 top-0 w-full   min-[450px]:pl-5 min-[450px]:pr-6 bg-white z-40">
        <img src={Logo} className="w-28" />
        <div className="   flex justify-start items-center ">
          <SheetTrigger>
            <MenuIcon fontSize="large" />
          </SheetTrigger>
        </div>
      </div>
      <SheetContent side="left" className="w-80">
        <ul className="w-full flex flex-col justify-center items-center mt-2  text-lg">
          <li className="border-b-2 border-violet-500  w-full my-4  ">
            <SheetClose asChild>
              <Link
                className="font-semibold flex justify-between  "
                to="Home"
                spy={true}
                smooth={true}
              >
                Home
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
          <li className="border-b-2 border-violet-500  w-full my-4  ">
            <SheetClose asChild>
              <Link
                className="font-semibold flex justify-between  "
                to="About"
                spy={true}
                smooth={true}
              >
                About
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
          <li className=" border-b-2 border-violet-500 w-full my-4  ">
            <SheetClose asChild>
              <Link
                className="font-semibold flex justify-between  "
                to="Services"
                spy={true}
                smooth={true}
              >
                Services
                <KeyboardArrowRightIcon className="" />
              </Link>
            </SheetClose>
          </li>
          <li className="border-b-2 border-violet-500 w-full my-4  ">
            <SheetClose asChild>
              <Link
                className="font-semibold flex justify-between  "
                to="Contact"
                spy={true}
                smooth={true}
              >
                Contact Us
                <KeyboardArrowRightIcon />
              </Link>
            </SheetClose>
          </li>
        </ul>
        <SheetClose className="absolute right-4 top-4  rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
          {/* <X className="h-4 w-4  " /> */}
          <span className="sr-only   ">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;
