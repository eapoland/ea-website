import React from "react";
import { Button, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import "./IntroSection.scss";
import Fade from "react-reveal/Fade";

const IntroSection = ({ content, withButton }) => {
  const { t } = useTranslation("common");

  return (
    <Row className="intro-section">
      <Col xs={6} className="intro-section-column text-center mx-auto">
        <Fade bottom cascade>
          <div>
            <h1 className="intro-section__heading">{t(`${content}.title`)}</h1>
          </div>
        </Fade>
        <p className="intro-section__subtitle">{t(`${content}.text`)}</p>
        {withButton && (
          <Button className="intro-section__button">Dowiedz się więcej</Button>
        )}
      </Col>
    </Row>
  );
};

export default IntroSection;
