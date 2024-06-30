import React from "react";
// import About1 from "./about";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex w-screen h-16 md:h-20 items-center justify-between font-[400] text-white border-b px-2 bg-orange-900 ">
      <div className="logo md:w-2/5 w-3/5 text-xl font-sans ">
        📚Starlight Academy
      </div>
      <div className="md:"></div>
      <ul className=" hidden md:block  md:flex space-x-10 h-16 font-[400] grid-cols-7 items-center w-2/5 md:w-3/5 ">
        <li className=" list-none h-16 flex items-center justify-center  text-[14px]  font-medium font-mono text-center text-white   hover:text-white hover:font-semibold">
          <Link to="/">HOME</Link>
        </li>
        <li className="list-none h-16 flex items-center justify-center  text-[14px] font-medium font-mono text-center text-white  hover:text-white hover:font-semibold">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="list-none h-16 flex items-center justify-center  text-[14px] font-medium font-mono text-center text-white  hover:text-white hover:font-semibold">
          <Link to="/contact">CONTACT US</Link>
        </li>
        {/* <li className="list-none h-16 flex items-center justify-center  text-[14px] font-medium font-mono text-center text-white  hover:text-white hover:font-semibold">
          <Link to="/parents">PARENTS</Link>
        </li> */}
        {/* <li className="list-none h-16 px-2 flex items-center justify-center  text-[14px] font-medium font-mono text-center text-white  hover:text-white hover:font-semibold">
          <Link to="/teacher">TEACHER SECTION</Link>
        </li> */}
        <li className="list-none  h-16 flex items-center justify-center  text-[14px] font-medium font-mono text-center text-white  hover:font-semibold">
          <select className="bg-transparent border-0 " name="" id="">
            <option value="">Student Section</option>
            <option value="">Student Result</option>
            <option value="">Student Attendence</option>
            <option value="">Student Result</option>
          </select>

          {/* <Link to="/student">STUDENT SECTION</Link> */}
        </li>
        <li className="list-none px-2 h-16 flex items-center justify-center  text-[14px] font-medium font-mono text-center text-white  hover:text-white hover:font-semibold">
          <select className="bg-transparent " name="" id="">
            <option value="">Courses Section</option>
            <option value="">6th Standard</option>
            <option value="">9th Standard</option>
            <option value="">11th Standard</option>
          </select>

          {/* <Link to="/student">STUDENT SECTION</Link> */}
        </li>
        <li className="list-none px-2 h-16 flex items-center justify-center  text-[14px] font-medium font-mono text-center text-white  hover:text-white hover:font-semibold">
          <Link to="/updates">UPDATES</Link>
        </li>
      </ul>
    </nav>
  );
}
