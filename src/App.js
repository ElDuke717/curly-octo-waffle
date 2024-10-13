// src/App.js
import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
