import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
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
          <p>123 Marketing Street, City</p>
          <p>Email: info@marketingwebsite.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; 2023 Marketing Website. All rights reserved.</p>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
