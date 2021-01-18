import React from "react";
import SectionTitleWithTranslation from "../../components/SectionTitle/SectionTitleWithTranslation";
import { Row, Col } from "reactstrap";
import EAButton from "../../components/Common/EAButton/EAButton";
import "./ActivitiesPage.scss";
import michal from "../../assets/images/marcin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavHashLink } from "react-router-hash-link";

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
        <Col className="activities__col--narrow">
          <h3>Szkolenia i warsztaty</h3>
          <p className="activities__paragraph">
            Prowadzisz firmę lub organizację pozarządową? Porozmawiajmy o tym, jak powiększyć Twój dobroczynny
            ślad, lub społeczną odpowiedzialność! Na Twoje zamówienie przygotujemy treści dostosowane do
            potrzeb Twojej organizacji.
          </p>
          <EAButton title="Zapoznaj się z ofertą" />
        </Col>
      </Row>
      <Row className="activities__advisory">
        <Col>
          <h3>Doradztwo</h3>
          <Row className="justify-content-center">
            <Col style={{ maxWidth: "683px" }}>
              <img src={michal} alt="" />
            </Col>
            <Col className="d-flex flex-column justify-content-center" style={{ maxWidth: "683px" }}>
              <h4>Marcin Tischner</h4>
              <p>
                Porozmawiajmy o sposobach, na jaki Twoja organizacja może osiągnać największy dobroczynny
                zwrot, lub wzmonić swoją odpowiedzialność społeczną *kontakt do Marcina Tischnera*.
              </p>
              <EAButton title="napisz do mnie" size={140} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="activities__col--narrow">
          <h3>Media</h3>
          <p className="activities__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="activities__media--links d-flex justify-content-between">
            <NavHashLink to={`about`}>
              <button className="activities__media--btn">
                <div className="d-flex justify-content-between align-items-center">
                  <p>O fundacji</p>
                  <FontAwesomeIcon icon={faChevronRight} style={{ marginTop: "-20px" }} />
                </div>{" "}
              </button>
            </NavHashLink>
            <a
              href="https://drive.google.com/drive/folders/10TgWw_2vMKzcbRUn1HpMsqgmwoW9Dy0l?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="activities__media--btn">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Materiały</p>
                  <FontAwesomeIcon icon={faChevronRight} style={{ marginTop: "-20px" }} />
                </div>{" "}
              </button>
            </a>
            <NavHashLink to={`contact`}>
              <button className="activities__media--btn">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Kontakt</p>
                  <FontAwesomeIcon icon={faChevronRight} style={{ marginTop: "-20px" }} />
                </div>{" "}
              </button>
            </NavHashLink>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ActivitiesPage;
