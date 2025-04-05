import React from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-[#fdf7f4] scroll-behavior:smooth">
      <Header />
      <Hero />
      <Features />
      <Footer />
     
    </div>
  );
}

export default App;
