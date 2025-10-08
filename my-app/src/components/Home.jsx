import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Smart City App</h1>
        <p>
          Explore city services, infrastructure updates, public amenities, and
          more.
        </p>
        <button className="btn-primary">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h2>City Services</h2>
          <p>
            Check availability, report issues, and access various municipal
            services online.
          </p>
        </div>
        <div className="feature-card">
          <h2>Infrastructure Updates</h2>
          <p>
            Stay updated with ongoing projects, roadworks, and smart initiatives
            in the city.
          </p>
        </div>
        <div className="feature-card">
          <h2>Citizen Engagement</h2>
          <p>
            Participate in surveys, report civic issues, and contribute to
            making your city smarter.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join the Smart City Revolution</h2>
        <p>Your city, your voice. Engage with your city like never before.</p>
        <button className="btn-secondary">Explore Now</button>
      </section>
    </div>
  );
};

export default Home;
