import React from "react";
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto larger-image"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
  <div className="mt-5 mt-sm-0 mb-4 flex">
    <div className="my-4">
      <i className={feature.icon}></i>
    </div>
    <div className="flex flex-col">
      <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
      <p className="text-muted mb-3 text-sm">{feature.desc}</p>
      <a
        href="mailto: adventurer-fla@outlook.com"
        className="btn btn-warning inline-flex items-center self-end"
      >
        More Information <span className="ml-2">&#8594;</span>
      </a>
    </div>
  </div>
</Col>

          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a
        href="mailto: adventurer-fla@outlook.com"
        className="btn btn-warning inline-flex items-center self-end"
      >
    Book your trip! <span className="ml-2">&#8594;</span>
      </a>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Feature = () => {
  const features = [
    {
      id: 1,
      img: "./images/boat2.png",
      title: "Step Aboard",
      desc: "Embark on an unforgettable aquatic adventure with our Morgan 41 Out Island Sailboat Snorkeling Excursions. Step aboard and immerse yourself in a world of vibrant marine life and crystal-clear waters. Our sailboat is your gateway to unparalleled snorkeling experiences, offering both half-day and full-day trips that cater to every explorer's desire.",
      link: "/",
    },
    {
      id: 2,
      img: "./images/boat3.png",
      title: "Bring your friends",
      desc: "Relax on deck between snorkeling sessions, basking in the sun's warm embrace and taking in panoramic coastal vistas. The Morgan 41's spacious layout provides ample room to unwind and capture the essence of a true maritime getaway.",
      link: "/",
    },
    {
      id: 3,
      img: "./images/boat4.png",
      title: "Special Occasions",
      desc: "Whether you're celebrating a birthday, anniversary, or simply want to spend quality time with loved ones, our sailboat snorkeling excursions are the perfect way to commemorate any special occasion.",
      link: "/",
    },
  ];
  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">More About Us!</span>
              </h3>
              <p className="text-muted"></p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};
export default Feature;
