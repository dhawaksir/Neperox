import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./services.css";

const DigitalMarketingPage = () => {
  const services = [
    {
      title: 'UI Design',
      image: 'ui-design.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing industry.',
    },
    {
      title: 'Marketing',
      image: 'marketing.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing industry.',
    },
    {
      title: 'Ecommerce',
      image: 'ecommerce.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing industry.',
    },
  ];

  return (
    <Container>
      <Row className="mb-5 mt-3">
        <Col lg="12">
          <h1 className="display-4 mb-4">Services </h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="container">
        <div className="box-form">
          <h1 className="page-title">Digital Marketing Services</h1>
          <div className="services-container">
            {services.map((service, index) => (
              <div key={index} className="service">
                <img src={service.image} alt={service.title} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DigitalMarketingPage;
