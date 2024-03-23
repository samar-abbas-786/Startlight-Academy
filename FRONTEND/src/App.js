import "./App.css";
// import { NextUIProvider } from "@nextui-org/system";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import About from "./components/about";
import Contact from "./components/contact";
import Teacher from "./components/teacher";
import Student from "./components/student";
import Parent from "./components/parents";
import Updates from "./components/updates";

// import Footer from "./components/footer";
import React from "react";
import Home from "./components/Home";
import reportWebVitail from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Button } from "@nextui-org/button";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/parents" element={<Parent />} />
        <Route exact path="/teacher" element={<Teacher />} />
        <Route exact path="/student" element={<Student />} />
        <Route exact path="/updates" element={<Updates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
