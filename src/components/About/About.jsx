import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

const AboutPage = () => {
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
      <style>
        {`
          /* Add your CSS styles here */
        `}
      </style>
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
              <h2 className="section-title text-center">Our Team</h2>
              <p>
                Behind [Your Company/Website Name] is a team of dedicated professionals who are committed to [your mission or purpose]. We come from diverse backgrounds, bringing a wide range of expertise and perspectives to the table. Our team members are [describe their qualifications, experience, or areas of expertise], and we work collaboratively to [deliver exceptional results, create innovative solutions, etc.].
              </p>
            </Col>
          </Row>
          <Row className="team-row">
            {teamMembers.map((member, index) => (
              <Col sm="4" md="4" key={index}>
                <div className="team-item">
                  <div className="team-box">
                    <img src={member.imageUrl} className="team-img" alt="pic" />
                  </div>
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
        <section className="section-white">
          <Row className="mb-5 mt-3">
            <Col lg="12">
              <h2 className="section-title text-center">Our Values</h2>
              <ul>
                <li><strong>Integrity:</strong> We operate with the highest level of integrity, ensuring honesty, transparency, and ethical practices in everything we do.</li>
                <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of our business. We strive to exceed their expectations, providing them with exceptional products/services and outstanding support.</li>
                <li><strong>Innovation:</strong> We embrace innovation and continuously seek new ways to improve our products/services, processes, and customer experience. We stay at the forefront of industry trends to deliver cutting-edge solutions.</li>
                <li><strong>Quality:</strong> We are committed to delivering products/services of the highest quality. We maintain rigorous standards and processes to ensure that our customers receive reliable, durable, and well-crafted solutions.</li>
                <li><strong>Community:</strong> We believe in giving back to the community and making a positive impact. Through various initiatives, we actively support [causes or organizations that align with your values].</li>
              </ul>
            </Col>
          </Row>
        </section>
        <section className="section-white">
          <Row className="mb-5 mt-3">
            <Col lg="12">
              <h2 className="section-title text-center">Our Mission</h2>
              <p>
                Our mission at [Your Company/Website Name] is to [concisely state your mission or purpose]. We are passionate about [the problem you're solving or the need you're fulfilling], and we strive to [impact your target audience positively]. Through our [products/services], we aim to [specific goals or outcomes].
              </p>
            </Col>
          </Row>
        </section>
        <section className="section-white">
          <Row className="mb-5 mt-3">
            <Col lg="12">
              <h2 className="section-title text-center">Our Goal</h2>
              <p>
                Our goal is to [describe your marketing goal]. We are committed to [specific strategies or actions] in order to [achieve the desired outcome]. By [delivering exceptional value, building strong relationships, etc.], we aim to [result or impact].
              </p>
            </Col>
          </Row>
        </section>
        <section className="section-white">
          <Row className="mb-5 mt-3">
            <Col lg="12">
              <h2 className="section-title text-center">Our Statement</h2>
              <p>
                [Your Company/Website Name] is [your brand's tagline or statement]. We [describe your unique value proposition or what sets you apart from the competition]. With [mention specific attributes, expertise, or benefits], we [deliver exceptional results, provide unmatched service, etc.] to our [target audience]. Join us and [invite them to take action or benefit from your offerings].
              </p>
            </Col>
          </Row>
        </section>
        <section className="section-white">
          <Row className="mb-5 mt-3">
            <Col lg="12">
              <h2 className="section-title text-center">Join Us</h2>
              <p>
                We invite you to explore our website and discover the range of [products/services] we offer. Whether you're a [target audience], [describe how you can help them]. If you have any questions, feedback, or collaboration opportunities, please don't hesitate to reach out to us.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default AboutPage;
