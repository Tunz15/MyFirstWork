import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Hero/>
      <Experience/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

