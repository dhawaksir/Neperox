import React from "react";
import { Container,Row,Col } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container>
    <Row className="mb-5 mt-3">
       <Col lg="8">
         <h1 className="display-4 mb-4">Blog</h1>
         <hr className="t_border my-4 ml-0 text-left" />
       </Col>
     </Row>
     </Container>
  );
};

export default Blog;
