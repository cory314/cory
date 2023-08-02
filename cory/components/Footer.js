import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
              <p className="text-muted mt-4 mb-2">adventurer-fla@outlook.com</p>
              <h6 className="text-muted font-weight-normal">1 601 850-4357</h6>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">
                2023 © Adventurer Florida. Website by Cory Nickerson
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
