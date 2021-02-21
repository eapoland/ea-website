import React from "react";
import "./FriendlyOrganisationsSection.scss";
import okLogo from "../../assets/images/ok-logo.png";
import paretoLogo from "../../assets/images/pareto-logo.png";
import altruistoLogo from "../../assets/images/altruisto-logo.png";
import provegLogo from "../../assets/images/proveg-logo.png";
import schweitzerLogo from "../../assets/images/schweitzer-logo.png";
import { Col, Row } from "reactstrap";
import { Fade } from "react-reveal";

const FriendlyOrganisationsSection = () => {
  return (
    <Fade bottom>
      <Row className="friendly-section ea-row">
        <Col className="friendly-section-column text-center mx-auto">
          <h3 className="friendly-section__heading">Przyjaciele</h3>
          <div className="d-flex justify-content-center align-items-center">
            <div className="friendly-section__logo">
              <img src={okLogo} alt="OK logo" />
            </div>
            <div className="friendly-section__logo">
              <img src={schweitzerLogo} alt="Albert Schweitzer logo" />
            </div>
            <div className="friendly-section__logo">
              <img src={provegLogo} alt="ProVeg logo" />
            </div>
            <div className="friendly-section__logo">
              <img src={altruistoLogo} alt="Altruisto logo" />
            </div>
            <div className="friendly-section__logo">
              <img src={paretoLogo} alt="Pareto logo" />
            </div>
          </div>
        </Col>
      </Row>
    </Fade>
  );
};

export default FriendlyOrganisationsSection;
