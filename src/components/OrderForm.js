// src/components/OrderForm.js
import React, { useState } from "react";
import "./OrderForm.css";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    firewoodAmount: "", // New field for firewood amount
    message: "",
  });

  // Options for firewood amounts
  const firewoodOptions = [
    { value: "0.031", label: "1 bundle - $6.99" },
    { value: "0.25", label: "1/4 Cord" },
    { value: "0.33", label: "1/3 Cord" },
    { value: "0.5", label: "1/2 Cord" },
    { value: "0.75", label: "3/4 Cord" },
    { value: "1", label: "1 Cord" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset firewoodAmount if service changes
    if (name === "service" && value !== "Firewood") {
      setFormData({ ...formData, [name]: value, firewoodAmount: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log("Form data:", formData);
    // Clear form or show success message
    // For example:
    // alert('Your order has been submitted!');
    // setFormData({ name: '', email: '', service: '', firewoodAmount: '', message: '' });
  };

  return (
    <section className="order-form" id="order">
      <h2>Order Our Services</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Service Selection */}
        <div className="form-group">
          <label htmlFor="service">
            Service<span>*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Firewood">Firewood</option>
            <option value="Tree Cutting">Tree Cutting</option>
            <option value="Environmental Consulting">
              Environmental Consulting
            </option>
          </select>
        </div>

        {/* Conditional Firewood Amount Selection */}
        {formData.service === "Firewood" && (
          <div className="form-group">
            <label htmlFor="firewoodAmount">
              Amount of Firewood<span>*</span>
            </label>
            <select
              id="firewoodAmount"
              name="firewoodAmount"
              value={formData.firewoodAmount}
              onChange={handleChange}
              required
            >
              <option value="">Select an Amount</option>
              {firewoodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Additional Information */}
        <div className="form-group">
          <label htmlFor="message">Additional Information</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Order</button>
      </form>
    </section>
  );
}

export default OrderForm;
