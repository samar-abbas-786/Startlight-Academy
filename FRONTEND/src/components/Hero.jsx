import React from "react";
// import hero from "./hero.jpeg";
import AI from "./AI.jpeg";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen md:top-14  ">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={AI}
        alt=""
      />
      <div className="absolute inset-0 bg-black opacity-55 flex-col items-center"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="content flex flex-col h-auto px-16 justify-between items-center w-full md:pb-10  md:space-y-4 pt-10 ">
          <h1 className="text-white text-3xl md:text-5xl w-screen px-3 md:px-1 font-bold md:text-center">
            Creating Pathways to Excellence{" "}
          </h1>
          <h2 className="text-white text-3xl text-center">
            {/* a great place to learn */}
          </h2>
          <p className="text-start px-3 w-screen mt-3 text-white text-[16px] font-sans md:text-xl md:px-80 ">
            Starlight Academy envisions a world where every child has access to
            high-quality education that inspires curiosity, builds character,
            and encourages lifelong learning
          </p>
          <button className="text-base w-fit mt-5 bg-indigo-950 rounded-sm py-1 text-white px-3 font-medium  hover:bg-indigo-700 ">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
}
