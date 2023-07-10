import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiSendPlaneLine } from "react-icons/ri";
import "./footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/services",
    display: "Service",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Newsletter email:", newsletterEmail);
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i className=""></i>
                  <span>NEPEROX Service</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedite.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Office</h5>
              <p className="office__info">Rupendehi,Butwal,Divertole</p>
              <p className="office__info">Phone: +0995345875365</p>
              <p className="office__info">Office Time: 12pm - 6pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">
                Subscribe to our newsletter
              </p>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="newsletter">
                  <input
                    type="email"
                    placeholder="Email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button type="submit">
                    <RiSendPlaneLine />
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <div className="footer__bottom">
          <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
            &copy; {year}, Developed by neperox. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
