import React from "react";
import TeamSection from "../../components/TeamSection/TeamSection";
import { Row, Col } from "reactstrap";
import ScrollToTop from "../../components/ScrollToTop";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./AboutPage.scss";

const AboutPage = () => {

  return (
    <div className="about">
      <ScrollToTop />
      <SectionTitle text="O nas" title="Czym jest Efektywny Altruizm?"  />
      <Row className="about__intro">
        <Col sm={6}>
          <h3>,,Jak przynieść światu<br />najwięcej dobra?”</h3>
          <p>Efektywny Altruizm to międzynarodowa społeczność szukająca odpowiedzi na to pytanie. Zdobytą tą drogą wiedzę wykorzystujemy później w praktyce, pracując na rzecz obszarów, które najbardziej potrzebują naszej pomocy. Okazuje się, że przy użyciu ograniczonych środków możemy mieć wpływ na realne zmiany na świecie.</p>
        </Col>
        <Col sm={6}>
        </Col> 
      </Row>
      <TeamSection />
    </div>
  );
};

export default AboutPage;
