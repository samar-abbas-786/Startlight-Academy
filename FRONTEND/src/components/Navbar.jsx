import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex w-screen h-16 items-center justify-between font-bold  text-black border-b px-2 bg-lime-400 ">
      <div className="logo w-2/5 text-xl font-bold font-mono">
        📚Madarsa Dua Educational School
      </div>
      <ul className="grid space-x-3 h-16 font-bold grid-cols-6  items-center    ">
        <li className=" list-none h-16 flex items-center justify-center text-base  font-medium font-mono text-center  hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/">HOME </Link>
        </li>
        <li className="list-none h-16 flex items-center justify-center text-base font-medium font-mono text-center hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="list-none h-16 flex items-center justify-center text-base font-medium font-mono text-center hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/contact">CONTACT US</Link>
        </li>
        <li className="list-none h-16 flex items-center justify-center text-base font-medium font-mono text-center hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/parents">PARENTS</Link>
        </li>
        <li className="list-none h-16 px-2 flex items-center justify-center text-base font-medium font-mono text-center hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/teacher">TEACHER SECTION</Link>
        </li>
        <li className="list-none px-2 h-16 flex items-center justify-center text-base font-medium font-mono text-center hover:bg-black hover:text-white hover:font-semibold">
          <Link to="/student">STUDENT SECTION</Link>
        </li>
      </ul>
    </nav>
  );
}
