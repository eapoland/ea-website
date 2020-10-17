import React from "react";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./TeamSection.scss";

const Person = ({ data }) => {
  return (
    <Row className="team-section__member">
      <Col>
        <Row className="justify-content-center">PHOTO</Row>
        <Row className="justify-content-center">
          <a href={data.linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} className="fa-3x" />
          </a>
          <a href={`mailto:${data.mail}`}>
            <FontAwesomeIcon icon={faEnvelope} className="fa-3x" />
          </a>
        </Row>
      </Col>
      <Col xs={9}>
        <h1>{data.name}</h1>
        <p>{data.desc}</p>
      </Col>
    </Row>
  );
};

export default Person;
