
import './App.css'
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// Skills component removed; skills are part of About
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;