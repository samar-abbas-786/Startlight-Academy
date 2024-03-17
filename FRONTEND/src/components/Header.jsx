import React from "react";
import logo from "./logo1.png";
import logo1 from "./logo.webp";
export default function Header() {
  return (
    <header className=" flex-col flex justify-evenly  items-center font-bold m-auto text-center py-5">
      {/* <div className="">
        <img
          className="h-28 w-28 border rounded-full p-2 border-black"
          src={logo}
          alt="Image"
        />
      </div> */}
      <div className="  text-5xl text-orange-400">
        MADARSA DUA EDUCATIONAL SCHOOL
      </div>
    </header>
  );
}
