import React from "react";
// import Navbar from "./Navbar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About1 from "./about";
// import ParticlesComponent from "./particle";
import Courses from "./courses";
// import Footer from "./footern";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About1 />
      {/* <Footer /> */}
      {/* <ParticlesComponent/> */}
      <Courses />
    </>
  );
};

export default Home;
