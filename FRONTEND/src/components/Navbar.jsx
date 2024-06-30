import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-orange-900  text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-sky-50">
              📚 Starlight Academy
            </div>
            <div className="hidden md:flex space-x-4 ml-10">
              <Link to="/" className="hover:font-semibold">
                HOME
              </Link>
              <Link to="/about" className="hover:font-semibold">
                ABOUT
              </Link>
              <Link to="/contact" className="hover:font-semibold">
                CONTACT US
              </Link>
              <div className="relative">
                <select className="bg-transparent border-0 no-arrow text-white hover:bg-black hover:text-white cursor-pointer">
                  <option value="" disabled selected hidden>
                    Student Section
                  </option>
                  <option value="">Student Result</option>
                  <option value="">Student Attendance</option>
                </select>
              </div>
              <div className="relative">
                <select className=" selectBackground bg-transparent border-0 no-arrow text-white cursor-pointer">
                  <option value="" disabled selected hidden>
                    Courses Section
                  </option>
                  <option value="">6th Standard</option>
                  <option value="">9th Standard</option>
                  <option value="">11th Standard</option>
                </select>
              </div>
              <Link to="/updates" className="hover:font-semibold">
                UPDATES
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-3xl "
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700"
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700"
          >
            CONTACT US
          </Link>
          <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700">
            <select className="bg-transparent border-0 no-arrow w-full text-white cursor-pointer">
              <option value="" disabled selected hidden>
                Student Section
              </option>
              <option value="">Student Result</option>
              <option value="">Student Attendance</option>
            </select>
          </div>
          <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700">
            <select className="bg-transparent border-0 no-arrow w-full text-white cursor-pointer">
              <option value="" disabled selected hidden>
                Courses Section
              </option>
              <option value="">6th Standard</option>
              <option value="">9th Standard</option>
              <option value="">11th Standard</option>
            </select>
          </div>
          <Link
            to="/updates"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-700"
          >
            UPDATES
          </Link>
        </div>
      </div>
    </nav>
  );
}
