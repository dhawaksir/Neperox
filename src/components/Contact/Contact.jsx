import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import "./contact.css";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState('send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let ConFon = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(ConFon);
  };

  return (
    <Container>
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Us </h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="container mt-5">
        <h1 className="mb-3">We're Ready, Let's Talk.</h1>
        
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <input className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      <div className="col-md-6">
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div>
              <h3>Address</h3>
              <p>123 Fifth Avenue, NY 10160, New York, USA</p>
            </div>
            <div>
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
            <div>
              <h3>Call Us</h3>
              <p>800-123-456</p>
            </div>
          </div>
          <div className="social-media-icons">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={32} />
            </a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={32} />
            </a>
            <a href="https://www.youtube.com/example" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={32} />
            </a>
          </div>
        </div>
      
    </Container>
   
  );
};

export default ContactUs;
