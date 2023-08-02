import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  /* const services = [
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { title : "Lorem Ipsum", desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
  ] */
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Dream Big</span></h3>
              <br></br>
              <p className="text-muted">Our sailboat is more than just a vessel, it is a canvas for your dreams. Elevate your special moments to new heights as we transform your wedding or anniversary into an unforgettable maritime celebration. Amidst the gentle lull of the waves and the backdrop of a breathtaking sunset, your love story unfolds in the most enchanting setting imaginable. Craft memories that shimmer like the sea itself, carried by the winds of passion and the artistry of our dedicated crew. This is more than a sailboat charter; this is an invitation to create cherished memories that will forever be etched in the tapestry of your life.</p>
            </div>
          </Col>
        </Row>
       {/*  <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row> */}
      </Container>
    </section>
  );
}
export default Service;