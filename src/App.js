import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FirewoodDelivery from './components/FirewoodDelivery';
import FirewoodFromYourTrees from './components/FirewoodFromYourTrees';
import EnvironmentalConsulting from './components/EnvironmentalConsulting';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  const onSelectService = (serviceComponent) => {
    setSelectedService(serviceComponent);
  };

  const renderServiceComponent = () => {
    switch (selectedService) {
      case 'FirewoodDelivery':
        return <FirewoodDelivery />;
      case 'FirewoodFromYourTrees':
        return <FirewoodFromYourTrees />;
      case 'EnvironmentalConsulting':
        return <EnvironmentalConsulting />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServicesSection onSelectService={onSelectService} />
      {renderServiceComponent()}
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;