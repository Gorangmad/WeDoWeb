import React from "react";

const ServicesCard = React.memo(({ title, desc }) => {
  return (
    <div className="rounded-2xl shadow-2xl flex flex-col items-start justify-center w-[360px] h-72 p-6 text-black hover:text-white transition ease-in-out hover:-translate-y-2 hover:scale-105 hover:bg-cyan-400 duration-300">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="60"
          height="60"
          fill="currentColor"
          className="bg-cyan-400 text-white rounded-full p-3"
        >
          <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
        </svg>
      </div>
      <p className="text-2xl font-bold mb-6 mt-4">{title}</p>
      <p className="text font-medium">{desc}</p>
    </div>
  );
});

export default ServicesCard;
