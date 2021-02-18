import React from "react";
import TeamSection from "../../components/TeamSection/TeamSection";
import Paragraph from "../../components/ContentSection/Paragraph";
import SectionTitle from "../../components/ContentSection/SectionTitle";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../../components/ScrollToTop";
import SectionTitleWithTranslation from "../../components/SectionTitle/SectionTitleWithTranslation";
import "./AboutPage.scss";

const AboutPage = () => {
  const { t } = useTranslation("common");

  return (
    <div className="about">
      <ScrollToTop />
      <SectionTitleWithTranslation content={"about"}  />
      <Row className="about__intro">
        <Col sm={6}>
          <h3>,,Jak przynieść światu<br />najwięcej dobra?”</h3>
          <p>Efektywny Altruizm to międzynarodowa społeczność szukająca odpowiedzi na to pytanie. Zdobytą tą drogą wiedzę wykorzystujemy później w praktyce, pracując na rzecz obszarów, które najbardziej potrzebują naszej pomocy. Okazuje się, że przy użyciu ograniczonych środków możemy mieć wpływ na realne zmiany na świecie.</p>
        </Col>
        <Col sm={6}>
        </Col>
      </Row>
      <Row id="movement" className={`content-section justify-content-center`}>
        <Col xs={6} className="content-section__column mx-auto">
          <SectionTitle title={"about.movement"}></SectionTitle>
          <Row>

          </Row>
          <Paragraph content={"about.movement.intro"}></Paragraph>
          <div>
            {t("about.movement.intro", { returnObjects: true }).map((element, index) => (
              <div key={index}>
                {element.subheading && <h5 className="content-section__subheading">{element.subheading}</h5>}
                <p>{element.text}</p>
              </div>
            ))}
          </div>
          <div className="d-flex flex-wrap">
            {t("about.movement.content", { returnObjects: true }).map((element, index) => (
              <Card body key={index} className="about__card">
                <CardTitle>
                  {element.subheading && (
                    <h5 className="content-section__subheading">{element.subheading}</h5>
                  )}
                </CardTitle>
                <CardText className="text-center">{element.text}</CardText>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <Row id="foundation" className="content-section justify-content-center content-section--grey">
        <Col xs={6} className="content-section__column mx-auto">
          <SectionTitle title="about.foundation"></SectionTitle>
          <Paragraph content="about.foundation.content"></Paragraph>
        </Col>
      </Row>
      <TeamSection />
    </div>
  );
};

export default AboutPage;
