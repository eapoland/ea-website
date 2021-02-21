import React, { useState } from "react";
import "./NewsletterCtaSection.scss";
import { Col, Row } from "reactstrap";

const NewsletterCtaSection = () => {
  const [email, setEmail] = useState("");

  return (
    <Row className="newsletter-cta-section ea-row">
      <Col className="text-center mx-auto">
        <h4 className="text-center">Zostańmy w kontakcie</h4>
        <div id="mc_embed_signup" className="signup-form">
          <form
            action="https://efektywnyaltruizm.us10.list-manage.com/subscribe/post?u=6efc200ccd45a00a03773d871&amp;id=da6abdece5"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              {/* <div className="indicates-required">
                  <span className="asterisk">*</span> pole wymagane
                </div> */}
              <div className="d-flex signup-form__input-group mc-field-group">
                <input
                  type="email"
                  value={email}
                  name="EMAIL "
                  className="required email signup-form__email-input"
                  id="mce-EMAIL"
                  placeholder="Adres e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="submit"
                  value="Zapisz się"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="signup-form__button btn btn-primary"
                />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
              </div>
              <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                <input
                  type="text"
                  name="b_6efc200ccd45a00a03773d871_da6abdece5"
                  tabIndex="-1"
                  value=""
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default NewsletterCtaSection;
