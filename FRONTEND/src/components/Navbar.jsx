import React from "react";
import About1 from "./about";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex w-screen h-16 items-center justify-between font-[400] text-white border-b px-2 bg-blue-700 ">
      <div className="logo w-2/5 text-xl  font-bold">
        📚Madarsa Dua Educational School
      </div>
      <ul className="grid space-x-3 h-16 font-[400] grid-cols-7  items-center w-3/5    ">
        <li className=" list-none h-16 flex items-center justify-center text-[15px]  font-medium font-mono text-center text-white  hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/">HOME</Link>
        </li>
        <li className="list-none h-16 flex items-center justify-center text-[15px] font-medium font-mono text-center text-white hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="list-none h-16 flex items-center justify-center text-[15px] font-medium font-mono text-center text-white hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/contact">CONTACT US</Link>
        </li>
        <li className="list-none h-16 flex items-center justify-center text-[15px] font-medium font-mono text-center text-white hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/parents">PARENTS</Link>
        </li>
        <li className="list-none h-16 px-2 flex items-center justify-center text-[15px] font-medium font-mono text-center text-white hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/teacher">TEACHER SECTION</Link>
        </li>
        <li className="list-none px-2 h-16 flex items-center justify-center text-[15px] font-medium font-mono text-center text-white hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/student">STUDENT SECTION</Link>
        </li>
        <li className="list-none px-2 h-16 flex items-center justify-center text-[15px] font-medium font-mono text-center text-white hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/updates">UPDATES</Link>
        </li>
      </ul>
    </nav>
  );
}
