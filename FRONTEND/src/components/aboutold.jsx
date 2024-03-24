import React from "react";
import Navbar from "./Navbar";
import about_Image from "./about.avif";
const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="abt w-screen h-screen flex justify-evenly items-center border-y-gray-300  ">
        <div className="text w-1/2 opacity-100 flex flex-col  items-center">
          <h1 className="text-center text-4xl font-bold mb-3 ">About Us</h1>
          <p className="text-center text-lg font-roboto  ">
            Madarsa Dua Educational School is committed to providing a nurturing environment
            where students excel academically, grow personally, and contribute
            positively to the community. Our innovative curriculum, dedicated
            faculty, and emphasis on values empower students to become ethical
            leaders and global citizens. Join us in inspiring excellence and
            building a brighter future. hr Feel free to adjust this brief About
            section as needed to capture the essence of Madarsa Dua Educational
            School succinctly.
          </p>
          <button className="text-base bg-red-500 mt-3 rounded-sm py-1 text-white px-3 font-medium  hover:bg-indigo-700 ">
            Join Today
          </button>
        </div>
        <div className="img w-2/5 h-4/6 flex items-center ">
          <img
            className="rounded-full"
            src={about_Image}
            alt="image"
            srcset=""
          />
        </div>
      </div>
    </>
  );
};
export default About;
