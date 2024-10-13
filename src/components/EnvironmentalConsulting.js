// src/components/EnvironmentalConsulting.js
import React from "react";
import "./ServiceDetail.css";

function EnvironmentalConsulting() {
  return (
    <div className="service-detail">
      <h2>Environmental Consulting</h2>
      <p>
        Our experts provide comprehensive environmental consulting services to
        help you achieve sustainability goals and comply with environmental
        regulations.
      </p>
      <ul>
        <li>Sustainability assessments</li>
        <li>Regulatory compliance assistance</li>
        <li>Customized environmental strategies</li>
      </ul>
      <button onClick={() => (window.location.href = "#contact")}>
        Contact Us
      </button>
    </div>
  );
}

export default EnvironmentalConsulting;
