import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/Contact/Contact";
import Services from "./components/services/Services";
import Project from "./components/Project/Project";


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
          <Route path="/blog" element={<blog/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/project" element={<Project/>} />
         
          
        </Routes>

       
       

      


        
      </div>
    </Router>
  );
}

export default App;
