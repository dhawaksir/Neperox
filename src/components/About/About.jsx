import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

const AboutPage = () => {
  const message = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`;

  const teamMembers = [
    {
      name: 'Johnathan Hawkins',
      position: 'Head of SEO',
      description: 'Johnathan is our co-founder and has developed search strategies for a variety of clients from international brands to medium-sized businesses for over five years.',
      imageUrl: 'https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg',
      socialMedia: {
        twitter: '#',
        pinterest: '#',
        facebook: '#',
        dribbble: '#',
      },
    },
    {
      name: 'Alexandra Smiths',
      position: 'SEO Specialist',
      description: 'Graduating with a degree in Spanish and English, Alexandra has always loved writing, and now she’s lucky enough to do it as part of her new job inside our agency.',
      imageUrl: 'https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg',
      socialMedia: {
        twitter: '#',
        pinterest: '#',
        facebook: '#',
        dribbble: '#',
      },
    },
    {
      name: 'Elisa Johanson',
      position: 'Marketing Manager',
      description: 'Elisa first fell in love with digital marketing at the university. She loves to learn and looks forward to being part of this new exciting industry for many years.',
      imageUrl: 'https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg',
      socialMedia: {
        twitter: '#',
        pinterest: '#',
        facebook: '#',
        dribbble: '#',
      },
    },
  ];

  return (
    <div className="about-page">
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">About Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <section className="section-white">
          <Row className="mb-5 mt-3">
            <Col lg="12">
              <h2 className="section-title text-center">The Team Behind Pacifico</h2>
              <p className="section-subtitle">{message}</p>
            </Col>
          </Row>
          <Row className="team-row">
            {teamMembers.map((member, index) => (
              <Col sm="4" md="4" key={index}>
                <div className="team-item">
                  <img src={member.imageUrl} className="team-img" alt="pic" />
                  <h3>{member.name}</h3>
                  <div className="team-info">
                    <p>{member.position}</p>
                  </div>
                  <p>{member.description}</p>
                  <ul className="team-icon">
                    <li>
                      <a href={member.socialMedia.twitter} className="twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member.socialMedia.pinterest} className="pinterest">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member.socialMedia.facebook} className="facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member.socialMedia.dribbble} className="dribble">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default AboutPage;
