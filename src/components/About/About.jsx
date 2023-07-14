import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../../styles/our-member.css";
import "./about.css";

// import ava01 from "../../assets/all-images/ava-1.jpg";
// import ava02 from "../../assets/all-images/ava-2.jpg";
// import ava03 from "../../assets/all-images/ava-3.jpg";

const OUR_MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    // imgUrl: ava01,
  },
  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    // imgUrl: ava02,
  },
  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    // imgUrl: ava03,
  },
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    // imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR_MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.instUrl}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

const About = () => {
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
          </Col>
        </Row>

        <Row className="team-row">
          <OurMembers />
        </Row>
      </section>
    </Container>
  );
};

export default About;
