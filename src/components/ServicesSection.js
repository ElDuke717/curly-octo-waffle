// src/components/ServicesSection.js
import React from 'react';
import './ServicesSection.css';

function ServicesSection({ onSelectService }) {
  const services = [
    {
      title: 'Firewood Delivery',
      description:
        'High quality firewood delivered to your door at competitive prices.',
      component: 'FirewoodDelivery',
    },
    {
      title: 'Firewood from Your Trees',
      description: 'We can help turn your fallen trees into firewood.',
      component: 'FirewoodFromYourTrees',
    },
    {
      title: 'Environmental Consulting',
      description:
        'We can help you with environmental consulting for your business or landscape.',
      component: 'EnvironmentalConsulting',
    },
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => onSelectService(service.component)}>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;