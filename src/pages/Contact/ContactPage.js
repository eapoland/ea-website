import React from "react";
import "./ContactPage.scss";
import ScrollToTop from "../../components/ScrollToTop";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import EAButton from "../../components/Common/EAButton/EAButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  return (
    <div className="contact">
      <ScrollToTop />
      <SectionTitle text="Odezwij się" title="Skontaktuj się z nami" />
      <Row className="ea-row">
        <Col className="contact__data">
          <h2>Fundacja Efektywny Altruizm</h2>
          <p>Plac Bankowy 2, 00-095 Warszawa KRS: 0000726237, REGON: 369951399, NIP: 5252746902</p>
          <p>ING Bank Śląski S.A. Nr konta: PL 67 1050 1012 1000 0090 8040 3265</p>
          <table>
            <tr>
              <td>Główny kontakt:</td>
              <td>
                <a href="mailto:michal.trzesimiech@efektywnyaltruizm.org">
                  michal.trzesimiech@efektywnyaltruizm.org
                </a>
              </td>
            </tr>
            <tr>
              <td>Wolontariat:</td>
              <td>
                <a href="mailto:wolontariat@efektywnyaltruizm.org">wolontariat@efektywnyaltruizm.org</a>
              </td>
            </tr>
            <tr>
              <td>Darowizny:</td>
              <td>
                <a href="mailto:darowizny@efektywnyaltruizm.org">darowizny@efektywnyaltruizm.org</a>
              </td>
            </tr>
            <tr>
              <td>Zbiórki dla EA:</td>
              <td>
                <a href="mailto:zbiorka@efektywnyaltruizm.org">zbiorka@efektywnyaltruizm.org</a>
              </td>
            </tr>
            <tr>
              <td>Media:</td>
              <td>
                <a href="mailto:media@efektywnyaltruizm.org">media@efektywnyaltruizm.org</a>
              </td>
            </tr>
          </table>
          <div className="contact__social d-flex justify-content-between">
            <div style={{ padding: "10px" }}>
              <a
                href="https://www.facebook.com/efektywnyaltruizmfundacja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookSquare} className="contact__icon" />
              </a>
            </div>
            <div style={{ padding: "10px" }}>
              <a
                href="https://www.linkedin.com/company/efektywnyaltruizm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="contact__icon" />
              </a>
            </div>
            <div style={{ padding: "10px" }}>
              <a
                href="https://www.youtube.com/channel/UCj6HkTu_5nYypCRKc-7y27A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="contact__icon" />
              </a>
            </div>
          </div>
        </Col>
        <Col className="contact__form">
          <div className="d-flex justify-content-between">
            <input placeholder="Imię" style={{ marginRight: "20px" }} />
            <input placeholder="Adres e-mail" />
          </div>
          <div className="d-flex justify-content-between">
            <input placeholder="Temat" />
          </div>
          <div>
            <textarea placeholder="Wiadomość" />
          </div>
          <EAButton title="Wyślij" />
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
