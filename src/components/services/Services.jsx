import React from 'react';
import "./services.css"; // Import the CSS file
// import Footer from './components/footer/footer';

const ServicesPage = () => {
  return (
    <div>
      <section className="services-page">
        <div className="container">
          <h2>Our Services</h2>

          <div className="service">
            <img src="digital-marketing.jpg" alt="Digital Marketing" />
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique sapien vitae risus ullamcorper faucibus.</p>
          </div>

          <div className="service">
            <img src="seo-optimization.jpg" alt="SEO Optimization" />
            <h3>SEO Optimization</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique sapien vitae risus ullamcorper faucibus.</p>
          </div>

          <div className="service">
            <img src="social-media-marketing.jpg" alt="Social Media Marketing" />
            <h3>Social Media Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique sapien vitae risus ullamcorper faucibus.</p>
          </div>

          <div className="service">
            <img src="content-creation.jpg" alt="Content Creation" />
            <h3>Content Creation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique sapien vitae risus ullamcorper faucibus.</p>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default ServicesPage;
