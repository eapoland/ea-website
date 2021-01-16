import React from "react";
import Row from "reactstrap/lib/Row";
import ScrollToTop from "../../components/ScrollToTop";
import SectionTitleWithTranslation from "../../components/SectionTitle/SectionTitleWithTranslation";
import PromotedWorkshop from "../../components/Workshops/PromotedWorkshop";
import Testimonials from "../../components/Workshops/Testimonials";
import WorkshopList from "../../components/Workshops/WorkshopList";
import WorkshopsFaq from "../../components/Workshops/WorkshopsFaq";
import "./WorkshopsPage.scss";

const WorkshopsPage = () => {
  return (
    <>
      <ScrollToTop />
      <Row className="flex-column align-items-center" style={{ marginRight: "0px", marginLeft: "0px" }}>
        <SectionTitleWithTranslation content="workshops" />
        <PromotedWorkshop />
        <WorkshopList />
        <Testimonials />
        <WorkshopsFaq />
      </Row>
    </>
  );
};

export default WorkshopsPage;
