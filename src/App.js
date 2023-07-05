import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'; // Import app.css

// Import the components/pages
import About from './about';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div>
        <div className="parallax" />

        <div className="header">
          <div className="logo">NEPEROX</div>
          <ul className="navigation">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contact.js">Contact</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <div id="home" className="section">
          <div className="section-content">
            <h1>Welcome to NEPEROX IT Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum enim ac urna blandit, at cursus
              velit dignissim. Duis euismod malesuada consectetur.
            </p>
          </div>
        </div>

        <div id="about" className="section">
          <div className="section-content">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum enim ac urna blandit, at cursus
              velit dignissim. Duis euismod malesuada consectetur.
            </p>
          </div>
        </div>

        <div id="blog" className="section">
          <div className="section-content">
            <h1>Blog</h1>
            <li>
              <a href="#blog.html">Blog</a>
            </li>
          </div>
        </div>

        <div id="contact" className="section">
          <div className="section-content">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum enim ac urna blandit, at cursus
              velit dignissim. Duis euismod malesuada consectetur.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum enim ac urna blandit, at cursus
              velit dignissim. Duis euismod malesuada consectetur.
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
