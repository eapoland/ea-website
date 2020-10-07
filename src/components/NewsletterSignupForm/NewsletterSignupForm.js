import React, { useState } from "react";

const NewsletterSignupForm = () => {
  const [email, setEmail] = useState(null);
  return (
    <div id="mc_embed_signup">
      <form
        action="https://efektywnyaltruizm.us10.list-manage.com/subscribe/post?u=6efc200ccd45a00a03773d871&amp;id=da6abdece5"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label for="mce-EMAIL">
              Adres Email <span className="asterisk">*</span>
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
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignupForm;
