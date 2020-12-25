import React from "react";
import TeamSection from "../../components/TeamSection/TeamSection";
import Paragraph from "../../components/ContentSection/Paragraph";
import SectionTitle from "../../components/ContentSection/SectionTitle";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import { useTranslation } from "react-i18next";
import "./AboutPage.scss";

const AboutPage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <SectionTitle content={"about"} />
      <Row id="movement" className={`content-section justify-content-center`}>
        <Col xs={6} className="content-section__column mx-auto">
          <SectionTitle title={"about.movement"}></SectionTitle>
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
    </>
  );
};

export default AboutPage;
