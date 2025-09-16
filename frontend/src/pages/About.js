import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="container">
          <h1>About FurniCraft</h1>
          <p>Crafting beautiful spaces since 2010</p>
        </div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, FurniCraft began as a small workshop with a big dream: 
              to create furniture that combines exceptional craftsmanship with timeless design. 
              What started as a passion project has grown into a beloved brand known for 
              quality and attention to detail.
            </p>
            <p>
              Every piece in our collection is thoughtfully designed and meticulously crafted 
              using the finest materials. We believe that furniture should not only be beautiful 
              but also built to last for generations.
            </p>
          </div>

          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Our workshop"
            />
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>
                We source materials responsibly and minimize waste throughout 
                our production process.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Quality</h3>
              <p>
                Every piece undergoes rigorous quality checks to ensure it meets 
                our high standards.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Craftsmanship</h3>
              <p>
                Our skilled artisans bring decades of experience to every piece 
                they create.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Customer Care</h3>
              <p>
                We stand behind our products with exceptional customer service 
                and support.
              </p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Sarah Johnson"
              />
              <h3>Sarah Johnson</h3>
              <p>Founder & Lead Designer</p>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Michael Chen"
              />
              <h3>Michael Chen</h3>
              <p>Head Craftsman</p>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="Emily Rodriguez"
              />
              <h3>Emily Rodriguez</h3>
              <p>Customer Experience Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;