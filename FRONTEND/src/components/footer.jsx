import React from "react";
import "../FRONTEND/src/App.js";
import { Link } from "react-router-dom";
import insta from "./insta.png";
import fb from "./fb.png";
import whatsp from "./whtats.png";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-evenly   min-h-96 text-white items-center bg-black w-screen ">
      <h1 className="text-3xl h-1/6 mt-3">📚Madarsa Dua Educational School</h1>
      <h2 className="text-2xl font-semibold underline text-center mr-24">
        Quick Links
      </h2>
      <div className="cols flex justify-evenly w-screen h-4/6 items-center">
        <div className="col1 h-5/6">
          <ul className=" h-full font-bold flex flex-col  justify-evenly space-y-3">
            <li className=" list-none  flex items-center justify-center   text-sm  font-medium  font-roboto text-center    hover:text-white hover:font-semibold">
              <Link
                to="/"
                className="flex flex-col items-center justify-center text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className="w-5 flex justify-center text-center font-roboto">
                  {" "}
                  Peerpura Road, Moh. Pathanpura,Manglaur,Roorkee,Uttrakhand
                </p>
              </Link>
            </li>
            <li className="list-none  flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link
                to="/about"
                className="w-5 flex justify-center flex-col items-center text-center font-roboto"
              >
                <i className="text-lg">📞</i> <p>9897405528</p>
              </Link>
            </li>
            <li className="list-none   flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link
                to="/contact"
                className="w-3 flex justify-center flex-col items-center text-center font-roboto"
              >
                <p className="text-lg">📩</p>
                Syedsamar@gmail.com, <br /> samarexapmle123@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="col2 h-5/6  flex flex-col items-center pl-24">
          <ul className="  font-bold flex flex-col justify-evenly h-full space-y-2 ">
            <li className=" list-none   flex items-center justify-center   text-sm  font-medium  font-roboto text-center    hover:text-white hover:font-semibold">
              <Link to="/">HOME</Link>
            </li>
            <li className="list-none   flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="list-none   flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li className="list-none   flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link to="/admission">ADMISSIONS</Link>
            </li>
            <li className="list-none     flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link to="/teacher">TEACHER SECTION</Link>
            </li>
            <li className="list-none     flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link to="/student">STUDENT SECTION</Link>
            </li>
          </ul>
        </div>
        <div className="col3 ">
          <ul className="  font-bold flex flex-col space-y-1 justify-start  ">
            <li className=" list-none   flex items-center justify-center   text-sm  font-medium  font-roboto text-center    hover:text-white hover:font-semibold">
              <Link className="flex items-center flex-col" to="/">
                <img className="h-7 w-7" src={insta} alt="" srcset="" />{" "}
                <p>@madarsa_dua_educational_school </p>
              </Link>
            </li>
            <li className="list-none   flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link className="flex items-center flex-col" to="/">
                <img className="h-7 w-7" src={fb} alt="" srcset="" />{" "}
                <p className="text-sm">@madarsa dua educational school </p>
              </Link>
            </li>
            <li className="list-none   flex items-center justify-center   text-sm font-medium  font-roboto text-center   hover:text-white hover:font-semibold">
              <Link className="flex items-center flex-col" to="/">
                <img className="h-7 w-7" src={whatsp} alt="" srcset="" />{" "}
                <pre className="text-sm"> 9897112233,9997405528 </pre>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy h-10 bg-black w-screen flex justify-center items-center text-xs border-t border-white">
        &copy;2024 Madarsa Dua Eduationa School. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
