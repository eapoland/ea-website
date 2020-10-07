import React, { useState } from "react";
//import { useTranslation } from "react-i18next";
import "./NewsletterCtaSection.scss";
import { Button, Col, Row } from "reactstrap";
import { Fade } from "react-reveal";
import NewsletterSignupForm from "../NewsletterSignupForm/NewsletterSignupForm";

const NewsletterCtaSection = () => {
  //const { t, i18n } = useTranslation("common");
  const [signupOpened, setSignupOpened] = useState(false);

  return (
    <Fade right>
      <Row className="newsletter-cta-section">
        <Col className="text-center mx-auto">
          <h1 className="newsletter-cta-section__heading">
            Zapisz się do newslettera
          </h1>
          {signupOpened ? (
            <NewsletterSignupForm></NewsletterSignupForm>
          ) : (
            <Button
              className="newsletter-cta-section__button"
              onClick={() => setSignupOpened(true)}
            >
              SUBSKRYBUJ
            </Button>
          )}
        </Col>
      </Row>
    </Fade>
  );
};

export default NewsletterCtaSection;
