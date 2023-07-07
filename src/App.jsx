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



function App() {
  return (
    <Router>
      <div>
        <div className="parallax" />

        <div className="header">
        <img src={logo} alt="NEPEROX" className="logo"  />


          <ul className="navigation">
            <li>
              <Link to="#home">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <Link to="/contact">contact Us</Link>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/Project">Projects</a>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/footer" element={<footer/>} />

         
          
        </Routes>

       
       

      


        
      </div>
    </Router>
  );
}

export default App;
