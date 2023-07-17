import React from 'react';
import './footer.css'; // Import the CSS file
import logo from '../../assets/logo.png';
// Import the logo image

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" /> {/* Add the logo */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique sapien vitae risus ullamcorper faucibus.</p>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">SEO Optimization</a></li>
            <li><a href="#">Social Media Marketing</a></li>
            <li><a href="#">Content Creation</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>divertole, butwal</p>
          <p>Email: apha11@gmail.com</p>
          <p>Phone: +977-9849495678</p>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; 2023 Marketing Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
