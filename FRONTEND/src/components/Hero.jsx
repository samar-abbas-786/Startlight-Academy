import React from "react";
import hero from "./hero.jpeg";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen top-14  ">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={hero}
        alt=""
      />
      <div className="absolute inset-0 bg-black opacity-65 flex-col items-center"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="content flex flex-col items-center w-full pb-10 space-y-4 pt-10 ">
          <h1 className="text-white text-5xl font-bold text-center">
            Building Strong Foundations for Success.{" "}
          </h1>
          <h2 className="text-white text-3xl text-center">
            {/* a great place to learn */}
          </h2>
          <p className="text-center text-white text-xl px-80 ">
            Take the first step towards a transformative educational experience.
            Enroll at{" "}
            <span className="text-green-200 text-lg">
              Madarsa Dua Educational School
            </span>{" "}
            and embark on a journey of discovery, growth, and success.
          </p>
          <button className="text-base bg-indigo-600 mt-3 rounded-sm py-1 text-white px-3 font-medium  hover:bg-indigo-700 ">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
}
