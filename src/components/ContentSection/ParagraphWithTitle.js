import React from "react";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import { Row, Col } from "reactstrap";

const ParagraphWithTitle = ({ content }) => {
  return (
    <Row className={`content-section mx-auto justify-content-center`}>
      <Col xs={9} className="content-section__column">
        <SectionTitle title={content}></SectionTitle>
        <Paragraph content={content}></Paragraph>
        <hr />
      </Col>
    </Row>
  );
};

export default ParagraphWithTitle;
