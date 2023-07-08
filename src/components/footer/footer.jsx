import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";
// import logo from "./src/assets/logo.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div>
              {/* <img src={logo} alt="NEPEROX" className="logo" /> */}
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className=""></i>
                  <h6>GET IN TOUCH</h6>
                </Link>
              </h1>
              <div className="footer__logo-content">
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
            </div>
          </Col>

          <Col lg="8" md="8" sm="12">
            <Row>
              <Col lg="6" md="6" sm="6">
                <div className="mb-4">
                  <h5 className="footer__link-title mb-4">Office</h5>
                  <p className="office__info">Rupendehi, Butwal, Divertole</p>
                  <p className="office__info">Phone: +0995345875365</p>
                  <p className="office__info">teams.alpha1@gmail.com</p>
                  <p className="office__info">Office Time: 12pm - 6pm</p>
                </div>
              </Col>

              <Col lg="6" md="6" sm="6">
                <div className="footer__bottom">
                  <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                    <i className="ri-copyright-line"></i>
                    Copyright {year}, Developed by neperox. All rights reserved.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
