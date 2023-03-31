import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import SectionOne from "./Components/Section-1/section-1";
import { SectionTwo } from "./Components/Section-2";
import { SectionThree } from "./Components/Section-3";
import { SectionFour } from "./Components/Section-4";
import { SectionFive } from "./Components/Section-5";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <div className="main__layout">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}


export default App;
