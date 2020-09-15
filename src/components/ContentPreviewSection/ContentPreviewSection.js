import React from "react";
import { useTranslation } from "react-i18next";
import "./ContentPreviewSection.scss";
import { Button, Col, Row } from "reactstrap";

const ContentPreviewSection = ({ reversed, content }) => {
  const { t, i18n } = useTranslation("common");

  return (
    <Row
      className={`content-preview-section${
        reversed ? " flex-row-reverse" : " flex-row"
      } justify-content-center`}
    >
      <Col xs={4}>
        <h6 className="content-preview-section__label">{content.label}</h6>
        <h1 className="content-preview-section__heading">{content.heading}</h1>
        <p className="content-preview-section__text">{content.text}</p>
        <Button className="content-preview-section__button">
          {content.cta}
        </Button>
      </Col>
      <Col xs={6}>
        <img src={content.img} alt={content.imgAlt} />
      </Col>
    </Row>
  );
};

export default ContentPreviewSection;
