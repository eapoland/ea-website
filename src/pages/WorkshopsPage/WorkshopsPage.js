import React from "react";
import Row from "reactstrap/lib/Row";
import ScrollToTop from "../../components/ScrollToTop";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PromotedWorkshop from "../../components/Workshops/PromotedWorkshop";
import WorkshopList from "../../components/Workshops/WorkshopList";
import WorkshopsFaq from "../../components/Workshops/WorkshopsFaq";
import "./WorkshopsPage.scss";

const WorkshopsPage = () => {
  return (
    <>
      <ScrollToTop />
      <Row className="flex-column align-items-center ea-row">
        <SectionTitle title="Warsztaty i szkolenia" text="Zapoznaj się z naszą ofertą" />
        <PromotedWorkshop />
        <WorkshopList />
        {/* <Testimonials /> */}
        <WorkshopsFaq />
      </Row>
    </>
  );
};

export default WorkshopsPage;
