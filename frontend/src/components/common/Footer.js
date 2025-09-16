import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">FurniCraft</h3>
            <p className="footer-description">
              Crafting beautiful furniture for your home since 2010. 
              We believe in quality, sustainability, and design that lasts.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Categories</h4>
            <ul className="footer-links">
              <li><Link to="/products?category=sofas">Sofas</Link></li>
              <li><Link to="/products?category=chairs">Chairs</Link></li>
              <li><Link to="/products?category=tables">Tables</Link></li>
              <li><Link to="/products?category=beds">Beds</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <p>📍 123 Furniture St, Design City</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@furnicraft.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 FurniCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;