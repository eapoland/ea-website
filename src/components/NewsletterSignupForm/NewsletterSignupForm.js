import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NewsletterSignupForm.scss";

const NewsletterSignupForm = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation("common");

  return (
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
            <span className="asterisk">*</span> {t("newsletter.required")}
          </div> */}
          <div className="signup-form__input-group mc-field-group">
            <label htmlFor="mce-EMAIL">
              {t("newsletter.email")}&nbsp;
              {/*  <span className="asterisk">*</span> */}
            </label>
            <input
              type="email"
              value={email}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_6efc200ccd45a00a03773d871_da6abdece5"
              tabIndex="-1"
              value=""
              readOnly
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value={t("newsletter.subscribe")}
              name="subscribe"
              id="mc-embedded-subscribe"
              className="signup-form__button btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignupForm;
