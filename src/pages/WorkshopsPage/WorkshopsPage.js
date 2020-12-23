import React from "react";
import Row from "reactstrap/lib/Row";
import PromotedWorkshop from "../../components/Workshops/PromotedWorkshop";
import Testimonials from "../../components/Workshops/Testimonials";
import WorkshopList from "../../components/Workshops/WorkshopList";
import WorkshopsFaq from "../../components/Workshops/WorkshopsFaq";
import "./WorkshopsPage.scss";

const WorkshopsPage = () => {
  return (
    <>
      <Row className="justify-content-center">
        <div className="workshops d-flex flex-column justify-content-center">
          <h2>Zapoznaj się z naszą ofertą</h2>
          <h1>Warsztaty i szkolenia</h1>
        </div>
        <PromotedWorkshop />
        <WorkshopList />
        <Testimonials />
        <WorkshopsFaq />
      </Row>
    </>
  );
};

export default WorkshopsPage;
