import { Link } from "react-router-dom";

const SecondaryNavbar = () => {
  return (
    <nav className="bg-cyan-500  py-5 ">
      <div className="w-5/6 mx-auto ">
        <li className="flex">
          <Link
            to="/"
            className="text-lg flex text-white font-semibold  items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="rgba(255,255,255,1)"
              className="mr-2"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
            Home
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
