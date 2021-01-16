import React from "react";
import { useParams } from "react-router-dom";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import EAButton from "../../components/Common/EAButton/EAButton";
import ScrollToTop from "../../components/ScrollToTop";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import workshops from "../../content/workshops.json";
import "./WorkshopDetailsPage.scss";
import michal from "../../assets/images/michal.png";

const WorkshopDetailsPage = () => {
  const { id } = useParams();
  const workshopDetails = workshops.find((w) => w.id === +id);

  return (
    <div>
      <ScrollToTop />
      <SectionTitle
        content={{
          text: "Warsztaty i szkolenia",
          title: workshopDetails.title,
        }}
      />
      <Row className="justify-content-center">
        <Col className="workshop-details__summary" style={{ maxWidth: "683px" }}>
          <p>{workshopDetails.summary}</p>
        </Col>
        <Col className="workshop-details__pricing" style={{ maxWidth: "683px" }}>
          <div style={{ marginBottom: "37px" }}>
            <div className="d-flex">
              <p className="workshop-details__pricing--title">DLA</p>
              <p className="workshop-details__pricing--content">kogos</p>
            </div>
            <div className="d-flex">
              <p className="workshop-details__pricing--title">LIMIT</p>
              <p className="workshop-details__pricing--content">kogos</p>
            </div>
            <div className="d-flex">
              <p className="workshop-details__pricing--title">CZAS</p>
              <p className="workshop-details__pricing--content">kogos</p>
            </div>
            <div className="d-flex">
              <p className="workshop-details__pricing--title">CENA</p>
              <p className="workshop-details__pricing--content">kogos</p>
            </div>
          </div>
          <EAButton title="Zapytaj o szkolenie" size="180" />
        </Col>
      </Row>
      <Row className="ea-row workshop-details__host">
        <Col>
          <h1>Prowadzący</h1>
          <Row className="justify-content-center">
            <Col className="workshop-details__host--photo" style={{ maxWidth: "683px" }}>
              <img src={michal} alt="" />
            </Col>
            <Col className="workshop-details__host--desc" style={{ maxWidth: "683px" }}>
              <h3>Michał Trzęsimiech</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>Przedsiębiorca dobroczynny działający w zaniedbanych, choć obiecujących obszarach aktywności publicznej. Organizator międzynarodowej społeczności Effective Altruism i inicjator jej struktur w Polsce. Prezes Fundacji Efektywny Altruizm - pełni tę funkcję od jej powstania w 2017 r. <ul><li>Certyfikowany trener EA pitu pitu </li><li>Przeprowadził w *pip* szkoleń </li><li>Fajny gość ogólnie. </li></ul>[lista do wymiany ofkorz]</p>",
                }}
              ></div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="workshop-details__modules flex-column align-items-center">
        <h1>Spis modułów</h1>
        <div className="workshop-details__modules--list">
          <ol>
            <li>ASDF</li>
            <li>ASDF</li>
            <li>ASDF</li>
            <li>ASDF</li>
            <li>ASDF</li>
          </ol>
        </div>
      </Row>
      <Row className="workshop-details__cta justify-content-center">
        <Col className="d-flex align-items-center" style={{ maxWidth: "683px" }}>
          <p>Call to action, czyli jakiś tekst zachęcający do kontaktu</p>
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
    </div>
  );
};

export default WorkshopDetailsPage;
