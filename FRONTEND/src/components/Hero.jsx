import React, { useState } from "react";
// import hero from "./hero.jpeg";
import { motion } from "framer-motion";
// import AI from "./AI.jpeg";
import homeVid from "./HeroVid.mp4";

export default function Hero() {
  const [image, setImages] = useState([]);

  return (
    <div className="relative w-screen h-screen md:top-14  ">
      {/* <img
        className="absolute inset-0 w-screen h-full object-cover"
        src={AI}
        alt=""
      /> */}
      <video
        className="absolute inset-0 w-screen h-full object-cover"
        src={homeVid}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 bg-black opacity-55 flex-col items-center"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="content flex flex-col h-auto px-16 justify-between items-center w-full md:pb-10  md:space-y-4 pt-10 ">
          <motion.h1
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: "0.8",
              delay: "0.2",
            }}
            className="text-white text-3xl md:text-5xl w-screen px-3 md:px-1 font-bold md:text-center"
          >
            Creating Pathways to Excellence{" "}
          </motion.h1>
          <h2 className="text-white text-3xl text-center">
            {/* a great place to learn */}
          </h2>
          <motion.p
            initial={{ x: -60, opacity: 0.3 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: "1",
              delay: "0.4",
            }}
            className="text-start px-3 w-screen mt-3 text-white text-[16px] font-sans md:text-xl md:px-80 "
          >
            Starlight Academy envisions a world where every child has access to
            high-quality education that inspires curiosity, builds character,
            and encourages lifelong learning
          </motion.p>
          <button className="text-base w-fit mt-5 bg-orange-700 rounded-sm py-1 text-gray px-3 font-bold  hover:bg-orange-500 ">
            Registration
          </button>
        </div>
      </div>
    </div>
  );
}
