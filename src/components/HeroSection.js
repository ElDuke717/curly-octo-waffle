// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <image src="https://images.unsplash.com/photo"/>
        <h1>Eekoh Environmental</h1>
        <p>We provide high quality firewood to the Richmond Area.</p>
        <button onClick={() => (window.location.href = "#order")}>
          Order Now
        </button>
      </div>
      <div className="social">
        <a href="#facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#youtube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
