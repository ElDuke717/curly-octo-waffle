// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Eeko Environmental. All Rights Reserved.</p>
      <p>
        <a href="#contact">Contact Us</a> | <a href="#privacy">Privacy Policy</a>
      </p>
    </footer>
  );
}

export default Footer;