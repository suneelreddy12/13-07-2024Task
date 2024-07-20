import React from "react";
import Header from "./components/Header.js"
import Hero from "./components/Hero.js";
import Features from "./components/Features.js";
import CallToAction from "./components/CallToAction.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
