import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Adventurer Florida!</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Sailboat Charter in the Heart of the Florida Keys</h1>
              <p className="text-muted mb-4 pb-2">Explore the Florida Keys as its meant to be, about a 41 foot Morgan Out Island Sailboat. See Dolphins, Turtes, Rays, Sunrises and Sunsets! Snorkel the world famous reefs!</p>
              <a href="mailto: adventurer-fla@outlook.com" className="btn btn-warning">
                Contact us now! <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/boat1.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;