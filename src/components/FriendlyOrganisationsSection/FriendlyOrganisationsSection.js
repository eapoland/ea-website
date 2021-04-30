import React from "react"
import "./FriendlyOrganisationsSection.scss"
import okLogo from "../../assets/images/ok-logo.png"
import paretoLogo from "../../assets/images/pareto-logo.png"
import altruistoLogo from "../../assets/images/altruisto-logo.png"
import provegLogo from "../../assets/images/proveg-logo.png"
import schweitzerLogo from "../../assets/images/schweitzer-logo.png"
import { Col, Row } from "reactstrap"
import { Fade } from "react-reveal"

const FriendlyOrganisationsSection = () => {
  return (
    <Fade bottom>
      <Row className="friendly-section ea-row">
        <Col className="friendly-section-column text-center mx-auto">
          <h3 className="friendly-section__heading">Przyjaciele</h3>
          <div className="friendly-section__items d-flex justify-content-center align-items-center">
            <div className="friendly-section__logo">
              <a
                href="https://www.otwarteklatki.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={okLogo} alt="OK logo" />
              </a>
            </div>
            <div className="friendly-section__logo">
              <a
                href="https://www.schweitzer.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={schweitzerLogo} alt="Albert Schweitzer logo" />
              </a>
            </div>
            <div className="friendly-section__logo">
              <a
                href="https://proveg.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={provegLogo} alt="ProVeg logo" />
              </a>
            </div>
            <div className="friendly-section__logo">
              <a
                href="https://altruisto.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={altruistoLogo} alt="Altruisto logo" />
              </a>
            </div>
            <div className="friendly-section__logo">
              <a
                href="https://optimumpareto.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={paretoLogo} alt="Pareto logo" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Fade>
  )
}

export default FriendlyOrganisationsSection
