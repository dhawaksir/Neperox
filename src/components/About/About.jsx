import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";


const About = () => {
  let message = ``;

  return (
   
       <Container>
      <Row className="mb-5 mt-3">
        <Col lg="12">
          <h1 className="display-4 mb-4">About Us </h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <section className="section-white">
        <Row className="mb-5 mt-3">
          <Col lg="12">
            <h2 className="section-title text-center">Testimonials</h2>
            <p className="section-subtitle text-center">{message}</p>
          </Col>
        </Row>

        <Row className="team-row">
          <Col sm={4}>
            <div className="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
                className="team-img"
                alt="pic"
              />
              <h3>kiran bhandari</h3>
              <div className="team-info">
                <p>Head of SEO</p>
              </div>
              <p>
                Johnathan is our co-founder and has developed search strategies
                for a variety of clients from international brands to medium-sized businesses for over five years.
              </p>
              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col sm={4}>
            <div className="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                className="team-img"
                alt="pic"
              />

              <h3>kushal kharel</h3>

              <div className="team-info">
                <p>SEO Specialist</p>
              </div>

              <p>
                Graduating with a degree in Spanish and English, Alexandra has
                always loved writing and now she’s lucky enough to do it as part
                of her new job inside our agency.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div className="team-item">
              <img
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg"
                className="team-img"
                alt="pic"
              />

              <h3>naman basnet</h3>

              <div className="team-info">
                <p>Marketing Manager</p>
              </div>

              <p>
                Elisa first fell in love with digital marketing at the
                university. He loves to learn and looks forward to being part
                of this new exciting industry for many years.
              </p>

              <ul className="team-icon">
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
