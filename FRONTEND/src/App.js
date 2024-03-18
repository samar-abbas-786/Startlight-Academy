import "./App.css";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import About from "./components/about";
import Contact from "./components/contact";
import Teacher from "./components/teacher";
import Student from "./components/student";
import Parent from "./components/parents";
// import Footer from "./components/footer";
import React from "react";
import Home from "./components/Home";
import reportWebVitail from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar />
        <Hero />
        <About />
        <Parent />
        <Footer /> */}

        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/parents" element={<Parent />} />
          <Route exact path="/teacher" element={<Teacher />} />
          <Route exact path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
