import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />

      <div className="next-section">
        <h2 className="gradient-heading">More sections coming soon...</h2>
        <p className="section-p">
          Scroll back up to experience the immersive animations! ✨
        </p>
      </div>
    </div>
  );
};

export default App;
