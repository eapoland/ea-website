import React from "react";
//import { useTranslation } from "react-i18next";
import "./ContentPreviewSection.scss";
import { Button, Col, Row } from "reactstrap";
import Fade from "react-reveal/Fade";

const ContentPreviewSection = ({ reversed, content }) => {
  //const { t, i18n } = useTranslation("common");

  return (
    <Fade bottom cascade>
      <Row
        className={`content-preview-section mx-auto${
          reversed ? " flex-row-reverse" : " flex-row"
        } justify-content-center`}
      >
        <Col xs={5} className="content-preview-section__column">
          <h6 className="content-preview-section__label">{content.label}</h6>
          <h1 className="content-preview-section__heading">
            {content.heading}
          </h1>
          <p className="content-preview-section__text">{content.text}</p>
          <Button className="content-preview-section__button">
            {content.cta}
          </Button>
        </Col>
        <Col xs={7} className="content-preview-section__column">
          <img src={content.img} alt={content.imgAlt} />
        </Col>
      </Row>
    </Fade>
  );
};

export default ContentPreviewSection;
