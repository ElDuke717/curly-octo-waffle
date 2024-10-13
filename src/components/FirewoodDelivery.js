// src/components/FirewoodDelivery.js
import React from "react";
import "./ServiceDetail.css";

function FirewoodDelivery() {
  return (
    <div className="service-detail">
      <h2>Firewood Delivery</h2>
      <p>
        We offer premium firewood delivered straight to your doorstep. Our wood
        is seasoned and ready to burn, ensuring you have a warm and cozy
        environment.
      </p>
      <ul>
        <li>Seasoned hardwoods</li>
        <li>Delivery in increments of 1/4 cord</li>
        <li>Stacking services available upon request</li>
      </ul>
      <button onClick={() => (window.location.href = "#order")}>
        Order Now
      </button>
    </div>
  );
}

export default FirewoodDelivery;
