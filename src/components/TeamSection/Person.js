import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./TeamSection.scss";

const Person = ({ data }) => {
  return (
    <Card className="team-section__member">
      <CardImg className="team-section__member-photo" src={data.photo} alt={`${data.name}`} />
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardText>{data.desc}</CardText>
        <Row className="justify-content-center">
          <a href={data.linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} className="fa-3x" />
          </a>
          <a href={`mailto:${data.mail}`}>
            <FontAwesomeIcon icon={faEnvelope} className="fa-3x" />
          </a>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Person;
