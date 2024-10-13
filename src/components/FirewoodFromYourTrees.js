// src/components/FirewoodFromYourTrees.js
import React from "react";
import "./ServiceDetail.css";

function FirewoodFromYourTrees() {
  return (
    <div className="service-detail">
      <h2>Firewood from Your Trees</h2>
      <p>
        We can convert the trees on your property into usable firewood. Our team
        will cut, split, and stack the wood, providing you with a sustainable
        heating solution.
      </p>
      <ul>
        <li>Efficient tree cutting services</li>
        <li>Firewood processing on-site</li>
        <li>Eco-friendly and cost-effective</li>
      </ul>
      <button onClick={() => (window.location.href = "#order")}>
        Get a Quote
      </button>
    </div>
  );
}

export default FirewoodFromYourTrees;
