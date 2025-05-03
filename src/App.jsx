import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom px-4 sticky-top">
        <a className="navbar-brand" href="#home">
          <img src="/logo.png" alt="Manipal Logo" />
        </a>
        <div className="ms-auto d-flex">
          <a className="nav-link nav-item-custom" href="#home">HOME</a>
          <a className="nav-link nav-item-custom" href="#apply">APPLY NOW</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section text-white">
        <div className="hero-overlay">
          <h1 className="hero-text">
            DR. TMA PAI ENDOWMENT CHAIR
          </h1>
        </div>
      </section>

      {/* About Us Heading */}
      <section className="text-center my-5">
        <h2 style={{ color: '#b27b42', fontWeight: '600', fontSize: '2rem' }}>About Us</h2>
      </section>

      {/* Carousel Section */}
      <div
        id="carouselSlide"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
        data-bs-interval="7000"
      >
        <div className="carousel-inner">
          {[1, 2, 3].map((_, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                <img
                  src="/manipal.png"
                  className="carousel-img col-md-6 mb-3 mb-md-0"
                  alt={`Slide ${index}`}
                />
                <div className="carousel-text col-md-6 px-md-4 text-center text-md-start">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselSlide"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselSlide"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Apply Section */}
      <section id="apply" className="apply-section">
        <h2>Apply for Research</h2>
        <p>
          Explore the opportunities in cutting-edge research projects.<br />
          Join us and be part of transformative innovations.
        </p>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <button className="apply-btn">Apply Now!</button>
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Manipal University. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
