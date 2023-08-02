import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About Us</h3>
              <br></br>
              <p className="text-muted">Founded by true live-aboard sailors, Adventurer Florida seeks to provide the magic of sailing and the ocean to people from all walks of life. Have a dream day on the water? Let us know and we will try and make it a reality</p>
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
}
export default About;