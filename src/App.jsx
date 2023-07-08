import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import logo from './assets/logo.png'
import Home from './components/Home/Home'
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/Contact/Contact";
import Services from "./components/services/Services";
import Project from "./components/Project/Project";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="parallax" />

        <header className="header">
          <img src={logo} alt="NEPEROX" className="logo" />

          <nav className="navigation">
            
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Project">Projects</Link>
              </li>
       
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Project" element={<Project />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;