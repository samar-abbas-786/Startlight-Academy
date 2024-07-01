import React from "react";
// import Navbar from "./Navbar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About1 from "./about";
import ParticlesComponent from "./particle";
// import Footer from "./footern";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About1 />
      {/* <Footer /> */}
      <ParticlesComponent/>
    </>
  );
};

export default Home;
