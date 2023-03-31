import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import SectionOne from "./Components/Section-1/section-1";
function App() {
  return (
     <div className="main__layout">
       <Navbar />
       <SectionOne />
     </div>
    
  );
}

export default App;
