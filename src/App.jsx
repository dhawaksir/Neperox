import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <div>
        <div className="parallax" />

        <div className="header">
          <div className="logo">NEPEROX</div>
          <ul className="navigation">
            <li>
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <Link to="/contact">contact Us</Link>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <div id="contact" className="section">
          <div className="section-content">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum enim ac urna blandit, at cursus velit dignissim. Duis
              euismod malesuada consectetur.
            </p>
          </div>
        </div>
       

        <div id="services" className="section">
          <div className="section-content">
            <h1>Services</h1>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>IT Consulting</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>
        </div>

        <div id="projects" className="section">
          <div className="section-content">
            <h1>Projects</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum enim ac urna blandit, at cursus velit dignissim. Duis
              euismod malesuada consectetur.
            </p>
          </div>
        </div>

        <div className="footer">
          <p>© 2023 NEPEROX. All rights reserved.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
