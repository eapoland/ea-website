import React from "react";
import SectionTitleWithTranslation from "../../components/SectionTitle/SectionTitleWithTranslation";
import { Row, Col } from "reactstrap";
import EAButton from "../../components/Common/EAButton/EAButton";
import "./ActivitiesPage.scss";

const ActivitiesPage = () => {
  return (
    <div className="activities">
      <SectionTitleWithTranslation content={"activities"} />
      <Row className="activities__cta justify-content-center">
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ maxWidth: "683px" }}
        >
          <h2>Współpraca z&nbsp;organizacjami</h2>
          <p>
            Prowadzisz firmę lub organizację pozarządową? Porozmawiajmy o tym, jak powiększyć Twój dobroczynny
            ślad, lub społeczną odpowiedzialność!
          </p>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center"
          style={{ maxWidth: "683px", paddingLeft: "53px" }}
        >
          <input placeholder="Adres e-mail..." />
          <textarea placeholder="Wiadomość..." />
          <EAButton title="Wyślij" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Szkolenia i warsztaty</h3>
          <p>
            Prowadzisz firmę lub organizację pozarządową? Porozmawiajmy o tym, jak powiększyć Twój dobroczynny
            ślad, lub społeczną odpowiedzialność! Na Twoje zamówienie przygotujemy treści dostosowane do
            potrzeb Twojej organizacji.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Doradztwo</h3>
          <p>
            Porozmawiajmy o sposobach, na jaki Twoja organizacja może osiągnać największy dobroczynny zwrot,
            lub wzmonić swoją odpowiedzialność społeczną *kontakt do Marcina Tischnera*.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Media</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ActivitiesPage;
